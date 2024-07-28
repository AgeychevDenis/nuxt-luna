<template>
  <AppContainer class="mt-10">
    <AppTitle text="Все пиццы" size="lg" class="font-extrabold" />
  </AppContainer>
  <TopBar />

  <AppContainer class="mt-10 pb-14">
    <div class="flex gap-[60px]">
      <div class="w-[250px]">
        <AppFilters />
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-16">
          <ProductsGroupList
            title="Пиццы"
            :categoryId="1"
            :items="[
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
            ]"
          />
          <ProductsGroupList
            title="Комбо"
            :categoryId="2"
            :items="[
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [{ price: 550 }],
              },
            ]"
          />
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup lang="ts">
import { AppContainer, AppFilters, AppTitle, ProductsGroupList, TopBar } from '@/components/shared'
</script>

<style scoped></style>
