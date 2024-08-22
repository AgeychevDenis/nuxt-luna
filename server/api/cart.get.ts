import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, 'cartToken')

    if (!token) {
      return { totalAmount: 0, items: [] }
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    })

    return userCart
  } catch (error) {
    console.log(error)
  }
})
