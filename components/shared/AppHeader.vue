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
        <AuthModal :open="openAuthModal" :on-close="() => (openAuthModal = false)" />

        <ProfileButton :on-click-sign-in="() => (openAuthModal = true)" />
        <div v-if="hasCart">
          <CartButton />
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core'

import { AppContainer, AuthModal, CartButton, ProfileButton, SearchInput } from '@/components/shared'
import { useToast } from '@/components/ui/toast/use-toast'

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
}

withDefaults(defineProps<Props>(), {
  hasSearch: true,
  hasCart: true,
})

const params = useUrlSearchParams()
const openAuthModal = ref(false)

const { toast } = useToast()

onMounted(() => {
  if (params.paid === 'success') {
    toast({
      description: 'Заказ успешно оплачен! Информация отправлена на почту.',
      variant: 'success',
    })
  }

  if (params.verified === 'success') {
    toast({
      description: 'Почта успешно подтверждена!',
      variant: 'success',
    })
  }
})
</script>

<style scoped></style>
