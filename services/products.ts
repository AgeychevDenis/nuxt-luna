import type { Product } from '@prisma/client'
import axios from 'axios'

import { ApiRoutes } from '@/services/constants'

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`/api/${ApiRoutes.SEARCH_PRODUCTS}`, { params: { query } })

  return data
}
