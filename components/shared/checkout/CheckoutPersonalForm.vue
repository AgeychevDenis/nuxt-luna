<template>
  <WhiteBlock title="2. Персональные данные">
    <div class="grid grid-cols-2 gap-5">
      <FormInput :isFieldDirty="isFieldDirty" name="firstName" class="text-base" placeholder="Имя" />
      <FormInput :isFieldDirty="isFieldDirty" name="lastName" class="text-base" placeholder="Фамилия" />
      <FormInput :isFieldDirty="isFieldDirty" name="email" class="text-base" placeholder="E-mail" />
      <FormInput :isFieldDirty="isFieldDirty" name="phone" class="text-base" placeholder="Телефон" />
    </div>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { WhiteBlock } from '@/components/shared'
import { FormInput } from '@/components/shared'
import type { IsFieldDirtyValue } from '@/components/shared/checkout/CheckoutFormSchemas'

interface Props {
  isFieldDirty: (value: IsFieldDirtyValue) => void
}

defineProps<Props>()
</script>

<style scoped></style>
