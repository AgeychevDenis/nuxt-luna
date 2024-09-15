export const mapPizzaSize = {
  20: '30 мл',
  30: '50 мл',
  40: '100 мл',
} as const

export const mapPizzType = {
  1: 'женский',
  2: 'мужской',
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
