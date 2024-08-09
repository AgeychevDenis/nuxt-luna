<template>
  <WhiteBlock title="3. Адрес доставки">
    <div class="flex flex-col gap-5">
      <FromAddressInput :isFieldDirty="isFieldDirty" name="address" />

      <FormTextarea :isFieldDirty="isFieldDirty" name="comment" :rows="5" class="text-base" placeholder="Комментарий" />
    </div>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { FormTextarea, FromAddressInput, WhiteBlock } from '@/components/shared'
import type { IsFieldDirtyValue } from '@/components/shared/checkout/CheckoutFormSchemas'

interface Props {
  isFieldDirty: (value: IsFieldDirtyValue) => void
}

defineProps<Props>()
</script>

<style scoped></style>
