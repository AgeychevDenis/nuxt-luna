import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event).query || ''
  const products = await prisma.product.findMany({
    where: {
      name: {
        search: String(query),
        mode: 'insensitive',
      },
    },
  })

  return products
})
