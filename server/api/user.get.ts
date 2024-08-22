import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return prisma.user.findFirst({
    where: {
      id: Number(query.id),
    },
  })
})
