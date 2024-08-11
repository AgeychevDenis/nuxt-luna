import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return prisma.user.findFirst({
    where: {
      id: Number(query.id),
    },
  })
})
