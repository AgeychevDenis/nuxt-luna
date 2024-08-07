<template>
  <AppContainer class="flex flex-col my-10" v-if="data">
    <ChoosePizzaForm
      v-if="isPizzaForm"
      :imageUrl="data.imageUrl"
      :name="data.name"
      :items="data.items"
      :ingredients="data.ingredients"
      :on-submit="onSubmit"
      :loading="store.loading"
    />
    <ChooseProductForm
      v-else
      :on-submit="onSubmit"
      :imageUrl="data.imageUrl"
      :name="data.name"
      :price="firstItem?.price || 0"
      :loading="store.loading"
    />
  </AppContainer>
</template>

<script setup lang="ts">
import { AppContainer } from '@/components/shared'
import { ChoosePizzaForm, ChooseProductForm } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

import type { ProductWithRelation } from '@/@types/prisma'

const route = useRoute()

const { data } = await useFetch<ProductWithRelation>(`/api/products/product/${route.params.id}`)

if (!data.value) {
  await navigateTo({ path: '/404' })
}

const isPizzaForm = ref(Boolean(data.value?.items[0].pizzaType))
const firstItem = data.value?.items[0]

const store = CartStore()
const { toast } = useToast()

const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
  try {
    const itemId = productItemId ?? firstItem?.id

    await store.addCartItem({
      productItemId: itemId,
      ingredients,
    })

    toast({
      description: `${data.value?.name} добавлена в корзину`,
      variant: 'success',
    })
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

<style scoped></style>
