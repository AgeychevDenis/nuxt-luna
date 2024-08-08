<template>
  <WhiteBlock class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-xl">Итого:</span>
      <span class="text-[34px] font-extrabold">{{ totalPrice }} ₽</span>
    </div>

    <CheckoutItemDetails :value="totalSum">
      <div class="flex items-center gap-2">
        <Package :size="20" class="text-gray-400" />
        Стоимость товаров:
      </div>
    </CheckoutItemDetails>
    <CheckoutItemDetails :value="vatPrice">
      <div class="flex items-center gap-2">
        <Percent :size="20" class="text-gray-400" />
        Налоги:
      </div>
    </CheckoutItemDetails>
    <CheckoutItemDetails :value="DELIVERY_PRICE">
      <div class="flex items-center gap-2">
        <Truck :size="20" class="text-gray-400" />
        Доставка:
      </div>
    </CheckoutItemDetails>

    <Button type="submit" class="w-full h-14 rounded-2xl mt-6 text-base font-bold">
      Перейти к оплате
      <ArrowRight className="w-5 ml-2" />
    </Button>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { ArrowRight, Package, Percent, Truck } from 'lucide-vue-next'

import { CheckoutItemDetails, WhiteBlock } from '@/components/shared'

interface Props {
  totalSum: number
}

const props = defineProps<Props>()

const VAT = 15
const DELIVERY_PRICE = 250
const vatPrice = computed(() => (props.totalSum * VAT) / 100)
const totalPrice = computed(() => props.totalSum + vatPrice.value + DELIVERY_PRICE)
</script>

<style scoped></style>
