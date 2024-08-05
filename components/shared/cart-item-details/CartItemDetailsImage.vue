<template>
  <img class="w-[60px] h-[60px]" :src="src" />
</template>

<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>

<style scoped></style>
