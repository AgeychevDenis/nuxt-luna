import { createPayment } from '@/lib/createPayment'
import { sendEmail } from '@/lib/sendEmail'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)

    const cartToken = getCookie(event, 'cartToken')

    if (!cartToken) {
      throw new Error('Cart token not found')
    }

    /* Нахождение корзины */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    })

    /* Проверка на наличие корзины */
    if (!userCart) {
      throw new Error('Cart not found')
    }

    /* Проверка на пустую корзину */
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty')
    }

    /* Создание заказа */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        totalAmount: userCart.totalAmount,
        comment: data.comment,
        status: 'PENDING',
        items: userCart.items,
      },
    })

    /* Очистка корзины */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    })

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    })

    /* Оплата */
    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: 'Оплата заказа №' + order.id,
    })

    /* Проверка на наличие оплаты */
    if (!paymentData) {
      throw new Error('Payment data not found')
    }

    const paymentUrl = paymentData.confirmation.confirmation_url

    /* Обновление статуса заказа */
    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    })

    /* Отправка письма */
    await sendEmail(
      'ageychevdenis@bk.ru',
      'Nuxt pizza / оплатите ваш заказ',
      `
        <h1>Заказ №${order.id} оплачен</h1>
        <p>Оплатите ваш заказ на сумму <b>${order.totalAmount} руб</b>. Перейдите <a href="${paymentData}">по ссылке</a> для оплаты заказа</p>
      `
    )

    return paymentUrl
  } catch (error) {
    console.error('Error [CHECKOUT]', error)
  }
})
