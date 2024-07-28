<template>
  <div>
    <AppTitle text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Верхние чекбоксы -->
    <div class="flex flex-col gap-4">
      <FilterCheckbox text="Можно собирать" value="1" id="terms2" />
      <FilterCheckbox text="Новинки" value="2" />
    </div>

    <!-- Фильтр цен -->
    <div class="mt-10 pb-7">
      <p class="font-bold mb-3">Цена от и до:</p>
      <div class="flex gap-3 mb-5">
        <Input type="number" placeholder="0" :min="0" :max="30000" />
        <Input type="number" placeholder="1000" :min="100" :max="1000" />
      </div>

      <RangeSlider :min="0" :max="1000" />

      <CheckboxFiltersGroup
        title="Ингредиенты"
        :limit="1"
        :items="[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Соленный огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '5' },
          { text: 'Сырный соус', value: '12' },
          { text: 'Моццарелла', value: '22' },
          { text: 'Чеснок', value: '32' },
          { text: 'Соленный огурчики', value: '42' },
          { text: 'Красный лук', value: '52' },
          { text: 'Томаты', value: '52' },
        ]"
        :default-items="[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Соленный огурчики', value: '4' },
        ]"
        class="mt-5"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle, CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '@/components/shared'
</script>

<style scoped></style>
