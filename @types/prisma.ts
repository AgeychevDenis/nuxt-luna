import type { Ingredient, Product, ProductItem } from '@prisma/client'

export type ProductWithRelation = Product & { items: ProductItem[]; ingredients: Ingredient[] }

export interface GetSearchParams {
  query?: string
  sortBy?: string
  sizes?: string
  pizzaTypes?: string
  ingredients?: string
  priceFrom?: string
  priceTo?: string
  limit?: string
  page?: string
}
