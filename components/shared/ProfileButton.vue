<template>
  <div>
    <Button
      v-if="Object.keys(store.session).length === 0"
      @click="onClickSignIn"
      variant="outline"
      class="flex items-center gap-1"
    >
      <User :size="16" />
      Войти
    </Button>

    <NuxtLink v-else to="">
      <Button variant="secondary" class="flex items-center gap-2">
        <CircleUser :size="18" />
        Профиль
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { CircleUser, User } from 'lucide-vue-next'

import { useAuthStore } from '@/stores/AuthStore'

interface Props {
  onClickSignIn?: () => void
}

defineProps<Props>()

const store = useAuthStore()

await store.setSession()
</script>

<style scoped></style>
