import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const user = getQuery(event)

    if (!user) {
      return [{ message: '[USER_GET] Unauthorized' }, { status: 401 }]
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    })

    return data
  } catch (error) {
    console.log(error)
    return [{ message: '[USER_GET] Server error' }, { status: 500 }]
  }
})
