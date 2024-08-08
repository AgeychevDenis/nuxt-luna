<template>
  <ClientOnly>
    <Sheet v-model:open="isShow">
      <SheetTrigger><slot /></SheetTrigger>
      <SheetContent class="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div class="flex flex-col h-full" :class="{ 'justify-center': !totalSum }">
          <template v-if="totalSum > 0">
            <SheetHeader>
              <SheetTitle>
                В корзине
                <span class="font-bold">{{ data.length }} товара</span>
              </SheetTitle>
            </SheetHeader>
          </template>

          <div v-if="totalSum <= 0" class="flex flex-col items-center justify-center w-72 mx-auto">
            <img src="/assets/images/empty-box.png" alt="empty cart" width="120" />
            <AppTitle size="sm" text="Корзина пустая" class="text-center font-bold my-2" />
            <p class="text-center text-neutral-500 mb-5">Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>

            <SheetClose>
              <Button class="w-56 h-12 text-base" size="lg">
                <ArrowLeft class="w-5 mr-2" />
                Вернуться назад
              </Button>
            </SheetClose>
          </div>

          <template v-if="totalSum > 0">
            <SheetDescription></SheetDescription>

            <div v-if="data.length > 0" class="-mx-6 mt-5 overflow-auto flex-1">
              <div v-for="item in data" :key="item.id" class="mb-2">
                <CartDrawerItem
                  :id="item.id"
                  :image-url="item.imageUrl"
                  :details="getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)"
                  :name="item.name"
                  :price="item.price"
                  :quantity="item.quantity"
                  :on-click-count-button="(type) => onClickCountButton(item.id, item.quantity, type)"
                  :on-click-remove="() => store.removeCartItem(item.id)"
                  :disabled="store.loading"
                />
              </div>
            </div>

            <SheetFooter class="-mx-6 bg-white p-8">
              <div class="w-full">
                <div class="flex mb-4">
                  <span class="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                  </span>

                  <span class="font-bold text-lg">{{ totalSum }} ₽</span>
                </div>

                <NuxtLink to="/checkout">
                  <Button
                    :loading="isRedirecting"
                    @click="isRedirecting = true"
                    :disabled="isRedirecting"
                    type="submit"
                    class="w-full h-12 text-base"
                  >
                    Оформить заказ
                    <ArrowRight class="w-5 ml-2" />
                  </Button>
                </NuxtLink>
              </div>
            </SheetFooter>
          </template>
        </div>
      </SheetContent>
    </Sheet>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

import { AppTitle, CartDrawerItem } from '@/components/shared'

import type { PizzaSize, PizzaType } from '@/constants/pizza'
import { getCartItemDetails } from '@/lib/getCartItemDetails'
import { CartStore } from '@/stores/CartStore'

const store = CartStore()

const isShow = ref(false)
const isRedirecting = ref(false)

const { data, totalSum, onClickCountButton } = useCart(isShow)
</script>

<style scoped></style>
