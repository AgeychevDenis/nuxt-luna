import prisma from '~/lib/prisma'
import { updateCartTotalAmount } from '@/server/lib/updateCartTotalAmount'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event?.context?.params?.id)
    const token = getCookie(event, 'cartToken')

    if (!token) {
      return [{ message: 'Cart token not found' }, { status: 400 }]
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    })

    if (!cartItem) {
      return { error: 'Cart item not found' }
    }

    await prisma.cartItem.delete({
      where: {
        id,
      },
    })

    return await updateCartTotalAmount(token)
  } catch (err) {
    console.log(err)
    return [{ message: '[CART_DELETE] Server error' }, { status: 500 }]
  }
})
