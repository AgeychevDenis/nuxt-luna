import { hashSync } from 'bcrypt'

import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    if (!body.userId) {
      throw new Error('Пользователь не найден')
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(body.userId),
      },
    })

    await prisma.user.update({
      where: {
        id: Number(body.userId),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password, 10) : findUser?.password,
      },
    })
  } catch (error) {
    console.log('Error [UPDATE_USER]', error)
    throw error
  }
})
