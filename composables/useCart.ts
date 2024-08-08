import { CartStore } from '@/stores/CartStore'

export const useCart = (isShow: Ref<boolean>) => {
  const store = CartStore()

  const data = computed(() => store.items)
  const totalSum = computed(() => store.items.reduce((acc, item) => (acc += item.price), 0))

  const onClickCountButton = async (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

    store.updateItemQuantity(id, newQuantity)
  }

  watch(isShow, async (newVal) => {
    if (newVal) {
      await store.fetchCartItems()
    }
  })

  return {
    data,
    totalSum,
    onClickCountButton,
  }
}
