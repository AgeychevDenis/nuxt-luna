<template>
  <div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
    <a v-for="(item, idx) in cars" :key="item">
      <Button :class="['flex items-center font-bold h-11 rounded-2xl px-5 ', activeClass(idx)]" variant="ghost">
        {{ item }}
      </Button>
    </a>
  </div>
</template>

<script setup lang="ts">
const cars = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']
const activeIndex = 0

const activeClass = (idx: number) => {
  return idx === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary'
}
</script>

<style scoped></style>
