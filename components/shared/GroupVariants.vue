<template>
  <div class="flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none">
    <Button
      v-for="item in items"
      :key="item.name"
      variant="ghost"
      @click="() => onClick?.(item.value)"
      class="flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm"
      :class="[{ 'bg-white shadow': item.value === value }, { 'text-gray-500 opacity-50 pointer-events-none': item.disabled }]"
    >
      {{ item.name }}
    </Button>
  </div>
</template>

<script setup lang="ts">
type Variant = {
  name: string
  value: string
  disabled?: boolean
}

interface Props {
  items: readonly Variant[]
  defaultValue?: string
  onClick?: (value: Variant['value']) => void
  value?: Variant['value']
}

defineProps<Props>()
</script>

<style scoped></style>
