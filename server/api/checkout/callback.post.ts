import { $Enums } from '@prisma/client'

import { PaymentCallbackData } from '~/@types/yookassa'
import prisma from '~/lib/prisma'
import { sendEmail } from '~/lib/sendEmail'
import { CartItemDTO } from '~/services/dto/cart-dto'

export default defineEventHandler(async (event) => {
  try {
    const body = (await readBody(event)) as PaymentCallbackData

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    })

    if (!order) {
      return { error: 'Order not found' }
    }

    const isSucceeded = body.object.status === 'succeeded'

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? $Enums.OrderStatus.SUCCEEDED : $Enums.OrderStatus.CANCELLED,
      },
    })

    const items = order?.items as unknown as CartItemDTO[]

    if (isSucceeded) {
      await sendEmail(
        'ageychevdenis@bk.ru',
        'Nuxt pizza / ваш заказ оплачен',
        `
          <h1>Спасибо за покупку! </h1>
          <p>Ваш заказ на сумму <b>${order.totalAmount} руб</b> оплачен. </p>
  
          <p>Список товаров:</p>
          <ul>
            ${items.map((item) => `<li>${item.productItem.product.name} - ${item.quantity} шт. - ${item.productItem.price * item.quantity} руб</li>`).join('')}
          </ul>
        `
      )
    }
  } catch (error) {
    console.log('[Checkout callback error]', error)
    return { error: 'Server error' }
  }
})
