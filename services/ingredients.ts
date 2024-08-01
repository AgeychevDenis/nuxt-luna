import type { Ingredient } from '@prisma/client'
import axios from 'axios'

import { ApiRoutes } from '@/services/constants'

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axios.get<Ingredient[]>(`/api/${ApiRoutes.INGREDIENTS}`)

  return data
}
