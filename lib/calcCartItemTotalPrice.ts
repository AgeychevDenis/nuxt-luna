import type { CartItemDTO } from '@/services/dto/cart-dto'

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  return (item.productItem.price + item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)) * item.quantity
}
