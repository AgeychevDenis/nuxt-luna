// import { navigateTo } from 'nuxt/app'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const code = getQuery(event)?.code

  if (!code) {
    return [{ error: 'Неверный код' }, { status: 400 }]
  }

  const verificationCode = await prisma.verificationCode.findFirst({
    where: {
      code: String(code),
    },
  })

  if (!verificationCode) {
    return [{ error: 'Invalid code' }, { status: 400 }]
  }

  await prisma.user.update({
    where: {
      id: verificationCode.userId,
    },
    data: {
      verified: new Date(),
    },
  })

  await prisma.verificationCode.delete({
    where: {
      id: verificationCode.id,
    },
  })

  await sendRedirect(event, '/?verified', 301)
})
