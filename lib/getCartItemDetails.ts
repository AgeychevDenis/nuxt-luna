import type { CartStateItem } from './getCartDetails'
import { type PizzaSize, type PizzaType, mapPizzType } from '@/constants/pizza'

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize
): string => {
  const details: string[] = []
  const detailsJoin = computed(() => details.join(', '))

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzType[pizzaType]
    details.push(`${typeName} ${pizzaSize} см`)
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name))
  }

  return detailsJoin.value
}
