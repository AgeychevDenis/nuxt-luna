<template>
  <div class="flex flex-col items-center justify-center mt-40">
    <InfoBlock
      title="Доступ запрещён"
      text="Данную страницу могут просматривать только авторизованные пользователи"
      imageUrl="/assets/images/lock.png"
    />
  </div>
</template>

<script setup lang="ts">
import { InfoBlock } from '@/components/shared'
</script>

<style scoped></style>
