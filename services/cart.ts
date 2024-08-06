import axios from 'axios'

import type { CartDTO } from '@/services/dto/cart-dto'

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axios.get<CartDTO>('/api/cart')

  return data
}

export const updateItemQuantity = async (id: number, quantity: number): Promise<CartDTO> => {
  const { data } = await axios.patch<CartDTO>('/api/cart/' + id, { quantity })

  return data
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const { data } = await axios.delete<CartDTO>('/api/cart/' + id)

  return data
}
