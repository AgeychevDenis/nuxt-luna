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
        :on-submit="onAddPizza"
      />
      <ChooseProductForm
        v-else
        :on-submit="onAddProduct"
        :imageUrl="product.imageUrl"
        :name="product.name"
        :price="firstItem.price"
      />

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
import { useToast } from '@/components/ui/toast/use-toast'

import type { ProductWithRelation } from '@/@types/prisma'
import { addCartItem } from '@/services/cart'

interface Props {
  product: ProductWithRelation
}

const props = defineProps<Props>()

const isPizzaForm = ref(Boolean(props.product.items[0].pizzaType))
const firstItem = props.product.items[0]

const { toast } = useToast()

const onAddProduct = () => {
  addCartItem({ productItemId: firstItem.id })
}

const onAddPizza = async (productItemId: number, ingredients: number[]) => {
  try {
    toast({
      description: 'Вы добавили пиццу в корзину',
      variant: 'success',
    })

    // await addCartItem({
    //   productItemId,
    //   ingredients,
    // })
  } catch (error) {
    toast({
      title: 'Ошибка',
      description: 'Не удалось добавить пиццу в корзину',
      variant: 'destructive',
    })
    console.error(error)
  } finally {
  }
}

const onSubmit = () => {
  if (isPizzaForm) {
  }
}
</script>

<style lang="scss" scoped></style>
