import { type CartStateItem, getCartDetails } from '@/lib/getCartDetails'
import { Api } from '@/services/api-client'

export interface CartState {
  loading: Ref<boolean>
  error: Ref<boolean>
  totalAmount: Ref<number>
  items: Ref<CartStateItem[]>
  fetchCartItems: () => Promise<void>
  updateItemQuantity: (id: number, quantity: number) => Promise<void>
  addCartItem: (values: any) => Promise<void>
  removeCartItem: (id: number) => Promise<void>
}

export const CartStore = defineStore('cartStore', (): CartState => {
  const items = ref<CartStateItem[]>([])
  const loading = ref<boolean>(false)
  const totalAmount = ref<number>(0)
  const error = ref<boolean>(false)

  const removeCartItem = async (id: number) => {
    try {
      loading.value = true
      error.value = false
      const data = await Api.cart.removeCartItem(id)

      const { items: dataItems, totalAmount: dataTotalAmount } = getCartDetails(data)

      items.value = dataItems
      totalAmount.value = dataTotalAmount
    } catch (err) {
      error.value = true
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const fetchCartItems = async () => {
    try {
      loading.value = true
      error.value = false
      const data = await Api.cart.getCart()

      const { items: dataItems, totalAmount: dataTotalAmount } = getCartDetails(data)

      items.value = dataItems
      totalAmount.value = dataTotalAmount
    } catch (err) {
      error.value = true
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const updateItemQuantity = async (id: number, quantity: number) => {
    try {
      loading.value = true
      error.value = false
      const data = await Api.cart.updateItemQuantity(id, quantity)

      const { items: dataItems, totalAmount: dataTotalAmount } = getCartDetails(data)

      items.value = dataItems
      totalAmount.value = dataTotalAmount
    } catch (err) {
      error.value = true
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const addCartItem = async (values: any) => {
    // try {
    //   loading.value = true
    //   error.value = false
    //   const data = await Api.cart.addCartItem(values)
    //   getCartDetails(data)
    // } catch (err) {
    //   error.value = true
    //   console.error(err)
    // } finally {
    //   loading.value = false
    // }
  }

  return {
    items,
    loading,
    totalAmount,
    error,
    removeCartItem,
    fetchCartItems,
    updateItemQuantity,
    addCartItem,
  }
})
