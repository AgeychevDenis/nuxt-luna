<template>
  <ClientOnly>
    <Sheet>
      <SheetTrigger><slot /></SheetTrigger>
      <SheetContent class="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине
            <span class="font-bold">{{ data.length }} товара</span>
          </SheetTitle>
        </SheetHeader>

        <SheetDescription></SheetDescription>

        <div v-if="data.length > 0" class="-mx-6 mt-5 overflow-auto flex-1">
          <div v-if="!store.loading">
            <div v-for="item in data" :key="item.id" class="mb-2">
              <CartDrawerItem
                :id="item.id"
                :image-url="item.imageUrl"
                :details="
                  item.pizzaType && item.pizzaSize
                    ? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)
                    : ''
                "
                :name="item.name"
                :price="item.price"
                :quantity="item.quantity"
                :on-click-count-button="(type) => onClickCountButton(item.id, item.quantity, type)"
                :on-click-remover="() => store.removeCartItem(item.id)"
              />
            </div>
          </div>

          <div v-else>
            <img class="w-14 m-auto" src="/assets/icons/tube-spinner.svg" alt="" />
          </div>
        </div>

        <SheetFooter class="-mx-6 bg-white p-8">
          <div class="w-full">
            <div class="flex mb-4">
              <span class="flex flex-1 text-lg text-neutral-500">
                Итого
                <div class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span class="font-bold text-lg">0 ₽</span>
            </div>

            <NuxtLink to="">
              <Button type="submit" @click="" :loading="false" class="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight class="w-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

import { CartDrawerItem } from '@/components/shared'

import type { PizzaSize, PizzaType } from '@/constants/pizza'
import { getCartItemDetails } from '@/lib/getCartItemDetails'
import { CartStore } from '@/stores/CartStore'

const store = CartStore()

const data = computed(() => store.items)

const onClickCountButton = async (id: number, quantity: number, type: 'plus' | 'minus') => {
  const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

  store.updateItemQuantity(id, newQuantity)
}

onMounted(async () => {
  await store.fetchCartItems()
})
</script>

<style scoped></style>
