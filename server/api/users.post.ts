import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)

  const user = await prisma.user.create({
    data,
  })

  return user
})
