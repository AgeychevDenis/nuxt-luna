<template>
  <WhiteBlock class="p-6">
    <div class="flex flex-col gap-1">
      <span class="text-xl">Итого:</span>
      <span v-if="!store.loading" class="h-11 text-[34px] font-extrabold">{{ totalPrice }} ₽</span>
      <Skeleton v-else class="w-full h-11" />
    </div>

    <CheckoutItemDetails v-for="item in checkoutItems" :key="item.label">
      <div class="flex items-center gap-2">
        <component :is="item.icon" :size="20" class="text-gray-400" />
        {{ item.label }}:
      </div>
      <template v-slot:price>
        <span v-if="!store.loading" class="font-bold text-lg">{{ item.displayValue }} ₽</span>
        <Skeleton v-else class="w-16 h-6 rounded-[6px]" />
      </template>
    </CheckoutItemDetails>

    <Button type="submit" :loading="submitting" :disabled="submitting" class="w-full h-14 rounded-2xl mt-6 text-base font-bold">
      Перейти к оплате
      <ArrowRight className="w-5 ml-2" />
    </Button>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { ArrowRight, Package, Percent, Truck } from 'lucide-vue-next'

import { CheckoutItemDetails, WhiteBlock } from '@/components/shared'

import { CartStore } from '@/stores/CartStore'

interface Props {
  totalSum: number
  submitting: boolean
}

const props = withDefaults(defineProps<Props>(), { totalSum: 0, submitting: false })

const store = CartStore()

const VAT = 15
const DELIVERY_PRICE = 250
const vatPrice = computed(() => (props.totalSum * VAT) / 100)
const totalPrice = computed(() => props.totalSum + vatPrice.value + DELIVERY_PRICE)

const checkoutItems = computed(() => [
  {
    label: 'Стоимость товаров',
    value: props.totalSum,
    displayValue: props.totalSum,
    icon: Package,
  },
  {
    label: 'Налоги',
    value: vatPrice.value,
    displayValue: vatPrice.value,
    icon: Percent,
  },
  {
    label: 'Доставка',
    value: DELIVERY_PRICE,
    displayValue: DELIVERY_PRICE,
    icon: Truck,
  },
])
</script>

<style scoped></style>
