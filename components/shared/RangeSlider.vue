<template>
  <div class="relative">
    <div :class="['relative flex w-full touch-none select-none mb-2 items-center', className]">
      <Slider
        v-model="localValues"
        :min="min"
        :max="max"
        :interval="step"
        :class="['relative h-2 w-full grow rounded-full ']"
        @drag-end="handleValueChange"
      >
        <template v-slot:tooltip="{ value }">
          <div class="absolute text-center" :style="getLabelStyle(value)">
            <span class="text-sm">{{ formatLabel ? formatLabel(value) : value }}</span>
          </div>
        </template>
        <template v-slot:thumb>
          <div
            class="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          ></div>
        </template>
      </Slider>
    </div>
    <div class="flex justify-between">
      <span class="text-xs">{{ localValues[0] }}</span>
      <span class="text-xs">{{ localValues[1] }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  className: String,
  min: Number,
  max: Number,
  step: Number,
  formatLabel: Function,
  value: Array,
  onValueChange: Function,
})

const initialValue = Array.isArray(props.value) ? props.value : [props.min, props.max]
const localValues = ref(initialValue)

watch(
  () => props.value,
  (newVal) => {
    localValues.value = Array.isArray(newVal) ? newVal : [props.min, props.max]
  }
)

const handleValueChange = () => {
  if (props.onValueChange) {
    props.onValueChange(localValues.value)
  }
}

const getLabelStyle = (value) => {
  return {
    left: `calc(${((value - props.min) / (props.max - props.min)) * 100}% + 0px)`,
    top: '10px',
  }
}
</script>
