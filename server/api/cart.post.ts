import crypto from 'crypto'

import prisma from '~/server/lib/prisma'
import { CreateCartItemValues } from '@/services/dto/cart-dto'
import { updateCartTotalAmount } from '@/server/lib/updateCartTotalAmount'

const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  })

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    })
  }

  return userCart
}

export default defineEventHandler(async (event) => {
  try {
    const data = (await readBody(event)) as CreateCartItemValues
    let token = getCookie(event, 'cartToken')

    if (!token) {
      token = crypto.randomUUID()
    }

    const userCart = await findOrCreateCart(token)

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    })

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          ingredients: {
            connect: data.ingredients?.map((id) => ({ id })),
          },
        },
      })
    }

    const updatedUserCart = await updateCartTotalAmount(token)

    setCookie(event, 'cartToken', token)

    return updatedUserCart
  } catch (error) {
    console.log(error)

    return [{ message: '[CART_POST] Server error' }, { status: 500 }]
  }
})
