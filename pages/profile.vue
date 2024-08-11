<template>
  <ClientOnly>
    <ProfileForm v-if="hasSession && data" :data="data" :user-id="id" />
  </ClientOnly>
</template>

<script setup lang="ts">
import type { User } from '@prisma/client'

import { ProfileForm } from '@/components/shared'

const { getSession } = useAuth()

const session = await getSession()

const hasSession = computed(() => Object.keys(session).length > 0)

if (!hasSession.value) {
  await navigateTo({ path: '/not-auth' })
}

const id = (session.user as { id: string }).id

const { data } = await useFetch('/api/user', {
  params: {
    id,
  },
  transform: (rawData: User) => {
    return {
      ...rawData,
      verified: new Date(rawData.verified),
      createdAt: new Date(rawData.createdAt),
      updatedAt: new Date(rawData.updatedAt),
    }
  },
})
</script>

<style scoped></style>
