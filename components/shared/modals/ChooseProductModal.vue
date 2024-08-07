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
        :on-submit="onSubmit"
        :loading="store.loading"
      />
      <ChooseProductForm
        v-else
        :on-submit="onSubmit"
        :imageUrl="product.imageUrl"
        :name="product.name"
        :price="firstItem.price"
        :loading="store.loading"
      />

      <DialogClose
        class="absolute top-[11px] right-[11px] h-[25px] w-[25px] z-10"
        aria-label="Close"
        @click="modalRouter.close()"
      ></DialogClose>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ChoosePizzaForm, ChooseProductForm } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

import type { ProductWithRelation } from '@/@types/prisma'
import { CartStore } from '@/stores/CartStore'

interface Props {
  product: ProductWithRelation
}

const props = defineProps<Props>()
const store = CartStore()
const modalRouter = useModalRouter()

const isPizzaForm = ref(Boolean(props.product.items[0].pizzaType))
const firstItem = props.product.items[0]

const { toast } = useToast()

const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
  try {
    const itemId = productItemId ?? firstItem.id

    await store.addCartItem({
      productItemId: itemId,
      ingredients,
    })

    toast({
      description: `${props.product.name} добавлена в корзину`,
      variant: 'success',
    })
    modalRouter.close()
  } catch (error) {
    toast({
      title: 'Ошибка',
      description: 'Не удалось добавить товар в корзину',
      variant: 'destructive',
    })
    console.error(error)
  }
}
</script>

<style lang="scss" scoped></style>
