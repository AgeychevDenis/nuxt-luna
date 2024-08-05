<template>
  <Sheet>
    <SheetTrigger><slot /></SheetTrigger>
    <SheetContent class="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
      <SheetHeader>
        <SheetTitle>
          В корзине
          <span class="font-bold">3 товара</span>
        </SheetTitle>
      </SheetHeader>

      <CartDrawerItem
        :id="1"
        image-url="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
        :details="getCartItemDetails(2, 30, [{ name: 'цыпленок' }])"
        name="Чоризо фреш"
        :price="419"
        :quantity="1"
      />
      <SheetFooter class="-mx-6 bg-white p-8">
        <div class="w-full">
          <div class="flex mb-4">
            <span class="flex flex-1 text-lg text-neutral-500">
              Итого
              <div class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
            </span>

            <span class="font-bold text-lg">1000 ₽</span>
          </div>

          <NuxtLink to="/cart">
            <Button type="submit" @click="" :loading="false" class="w-full h-12 text-base">
              Оформить заказ
              <ArrowRight class="w-5 ml-2" />
            </Button>
          </NuxtLink>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

import { CartDrawerItem } from '@/components/shared'

import { getCartItemDetails } from '@/lib/getCartItemDetails'
</script>

<style scoped></style>
