<template>
  <AppContainer class="flex flex-col my-10" v-if="data">
    <div class="flex flex-1">
      <ProductImage :imageUrl="data.imageUrl" :size="20" />

      <div class="w-[490px] bg-[#FCFCFC] p-7">
        <AppTitle :text="data.name" size="md" class="font-extrabold mb-1" />

        <p class="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque deserunt aliquid voluptatum provident
          necessitatibus blanditiis atque nemo
        </p>

        <GroupVariants
          selectedValue="2"
          :items="[
            { name: 'Маленькая', value: '1' },
            { name: 'Средняя', value: '2' },
            { name: 'Большая', value: '3', disabled: true },
          ]"
        />
      </div>
    </div>
  </AppContainer>
</template>

<script setup lang="ts">
import { AppContainer, AppTitle, GroupVariants, ProductImage } from '@/components/shared'

const route = useRoute()

const { data } = await useFetch(`/api/products/product/${route.params.id}`)

if (!data.value) {
  await navigateTo({ path: '/404' })
}
</script>

<style scoped></style>
