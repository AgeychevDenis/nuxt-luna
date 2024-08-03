import { H3Error, sendError } from 'h3'

import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = Number(event?.context?.params?.id)

  const notFoundError = () => {
    const error = new H3Error('Product not found')
    error.statusCode = 404
    return sendError(event, error)
  }

  if (!id) {
    return notFoundError()
  }

  const product = await prisma.product.findFirst({ where: { id } })

  if (!product) {
    return notFoundError()
  }

  return product
})
