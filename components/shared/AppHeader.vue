<template>
  <header class="border-b">
    <AppContainer class="flex items-center justify-between py-8">
      <NuxtLink to="/" class="flex items-center gap-4">
        <img src="/logo.png" width="35px" height="35px" alt="logo" />
        <div>
          <h1 class="text-2xl uppercase font-black">Nuxt Pizza</h1>
          <p class="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
        </div>
      </NuxtLink>

      <div v-if="hasSearch" class="mx-10 flex-1">
        <SearchInput />
      </div>

      <div class="flex items-center gap-3">
        <Button variant="outline" class="flex items-center gap-1">
          <User :size="16" />
          Войти
        </Button>

        <div v-if="hasCart">
          <CartButton />
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next'

import { AppContainer, CartButton, SearchInput } from '@/components/shared'

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
}

withDefaults(defineProps<Props>(), {
  hasSearch: true,
  hasCart: true,
})
</script>

<style scoped></style>
