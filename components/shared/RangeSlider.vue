<template>
  <div class="relative">
    <div class="relative flex w-full touch-none select-none mb-2 items-center">
      <Slider v-model="localValues" :min="min" :max="max" :step="step" class="relative h-2 w-full grow rounded-full" />
    </div>

    <div class="flex justify-between">
      <span class="text-xs">{{ valuesModel?.priceFrom }}</span>
      <span class="text-xs">{{ valuesModel?.priceTo }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PriceProps {
  priceFrom: number
  priceTo: number
}

interface Props {
  min: number
  max: number
  step: number
  formatLabel?: Function
  onValueChange?: Function
}

const props = defineProps<Props>()

const valuesModel = defineModel<PriceProps>()

const localValues = ref([valuesModel.value?.priceFrom || 0, valuesModel.value?.priceTo || 1000])

watch(
  localValues,
  (newValues) => {
    if (props.onValueChange) {
      props.onValueChange(newValues)
    }
  },
  { deep: true }
)
</script>
