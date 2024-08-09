<template>
  <ClientOnly>
    <FormField v-slot="{ componentField }" :name="name" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormControl>
          <vue-dadata
            v-bind="{ ...componentField, modelValue: value }"
            v-model="value"
            token="3eb5c4f3305c00385b936286f39ea12fec9f8756"
            placeholder="Введите адрес"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </ClientOnly>
</template>

<script setup lang="ts">
// @ts-ignore
import { VueDadata } from 'vue-dadata'
import 'vue-dadata/dist/style.css'

import type { IsFieldDirtyValue } from '@/components/shared/checkout/CheckoutFormSchemas'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

interface Props {
  isFieldDirty: (value: IsFieldDirtyValue) => void
  name: string
}

defineProps<Props>()

const value = ref('')
</script>

<style>
.vue-dadata__input {
  border-radius: calc(var(--radius) - 2px);
  border-color: hsl(var(--input));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
</style>
