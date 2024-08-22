import prisma from '~/server/lib/prisma'
import { updateCartTotalAmount } from '@/server/lib/updateCartTotalAmount'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event?.context?.params?.id)
    const data = (await readBody(event)) as { quantity: number }
    const token = getCookie(event, 'cartToken')

    if (!token) {
      return { error: 'Cart token not found' }
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    })

    if (!cartItem) {
      return { error: 'Cart item not found' }
    }

    await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: data.quantity,
      },
    })

    return await updateCartTotalAmount(token)
  } catch (error) {
    console.log('[CART_PATCH] Server error', error)
    return [{ message: 'Error update cart' }, { status: 500 }]
  }
})
