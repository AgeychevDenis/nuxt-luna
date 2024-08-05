import type { Ingredient } from '@prisma/client'

import { type PizzaSize, type PizzaType, mapPizzType } from '@/constants/pizza'

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
): ComputedRef<string> => {
  const details: string[] = []
  const detailsJoin = computed(() => details.join(', '))

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzType[pizzaType]
    details.push(`${typeName} ${pizzaSize} см`)
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name))
  }

  return detailsJoin
}
