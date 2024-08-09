<template>
  <FormField v-slot="{ componentField }" :name="name" :validate-on-blur="!isFieldDirty">
    <FormItem>
      <FormLabel v-if="label">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </FormLabel>
      <FormControl>
        <Textarea type="text" :rows="rows" :placeholder="placeholder" v-bind="componentField" />
      </FormControl>
      <FormMessage :unsaved="isFieldDirty" />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
import 'lucide-vue-next'

import type { IsFieldDirtyValue } from '@/components/shared/checkout/CheckoutFormSchemas'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface Props {
  name: string
  label?: string
  required?: boolean
  placeholder: string
  isFieldDirty: (value: IsFieldDirtyValue) => void
  rows?: number
}

defineProps<Props>()
</script>

<style scoped></style>
