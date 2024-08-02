<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      @click="onCheckedChange"
      :value="value"
      class="rounded-[8px] w-6 h-6"
      :id="`checkbox-${String(name)}-${String(value)}`"
      :checked="checked"
    />
    <label :for="`checkbox-${String(name)}-${String(value)}`" class="leading-none cursor-pointer flex-1">{{ text }}</label>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'

export interface FilterCheckboxProps {
  text: string
  value: string
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  name?: string
}

defineProps<FilterCheckboxProps>()
</script>

<style scoped></style>
