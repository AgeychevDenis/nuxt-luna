<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold flex-1 leading-6">{{ name }}</h2>
    </div>
    <p v-if="details.length > 0" class="text-xs text-gray-400 w-[90%] lowercase">{{ details }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  details: string
}

defineProps<Props>()
</script>
