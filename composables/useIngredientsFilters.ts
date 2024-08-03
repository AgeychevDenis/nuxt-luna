import type { Ingredient } from '@prisma/client'

import { Api } from '@/services/api-client'

interface ReturnProps {
  ingredients: Ingredient[]
}

export const useIngredientsFilters = async (): Promise<ReturnProps> => {
  let ingredients: Ingredient[] = []

  try {
    ingredients = await Api.ingredients.getAll()
  } catch (error) {
    console.error(error)
  } finally {
  }

  return { ingredients }
}
