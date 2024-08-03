<template>
  <Dialog :open="Boolean(product)">
    <DialogContent class="w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
      <DialogHeader>
        <DialogTitle>{{ product.name }}</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <DialogClose
        class="absolute top-[11px] right-[11px] h-[25px] w-[25px] z-10"
        aria-label="Close"
        @click="$modalRouter.close()"
      ></DialogClose>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import type { Product } from '@prisma/client'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
