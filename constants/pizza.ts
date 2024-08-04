export const mapPizzaSize = {
  20: 'Маленькая',
  30: 'Средняя',
  40: 'Большая',
} as const

export const mapPizzType = {
  1: 'традиционная',
  2: 'тонкая',
} as const

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}))

export const pizzaTypes = Object.entries(mapPizzType).map(([value, name]) => ({
  name,
  value,
}))

export type PizzaSize = keyof typeof mapPizzaSize
export type PizzaType = keyof typeof mapPizzType
