<template>
  <Slider :default-value="[33]" :max="100" :step="1" />
</template>

<script setup lang="ts">
type SliderProps = {
  min: number
  max: number
  step: number
  formatLabel?: (value: number) => string
  value?: number[] | readonly number[]
  onValueChange?: (values: number[]) => void
}
</script>

<style scoped></style>
