<template>
  <WhiteBlock title="3. Адрес доставки">
    <div class="flex flex-col gap-5">
      <Input name="firstName" class="text-base" placeholder="Введите адрес" />

      <Textarea :rows="5" class="text-base" placeholder="Комментарий" />
    </div>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { WhiteBlock } from '@/components/shared'
</script>

<style scoped></style>
