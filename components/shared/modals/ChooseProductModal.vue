<template>
  <Dialog :open="Boolean(product)">
    <DialogContent class="w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden p-0">
      <DialogTitle class="hidden"></DialogTitle>

      <DialogDescription class="hidden"></DialogDescription>

      <ChoosePizzaForm
        v-if="isPizzaForm"
        :imageUrl="product.imageUrl"
        :name="product.name"
        :items="product.items"
        :ingredients="product.ingredients"
      />
      <ChooseProductForm v-else :imageUrl="product.imageUrl" :name="product.name" />

      <DialogClose
        class="absolute top-[11px] right-[11px] h-[25px] w-[25px] z-10"
        aria-label="Close"
        @click="$modalRouter.close()"
      ></DialogClose>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ChoosePizzaForm, ChooseProductForm } from '@/components/shared'

import type { ProductWithRelation } from '@/@types/prisma'

interface Props {
  product: ProductWithRelation
}

const props = defineProps<Props>()

const isPizzaForm = ref(Boolean(props.product.items[0].pizzaType))
</script>

<style lang="scss" scoped></style>
