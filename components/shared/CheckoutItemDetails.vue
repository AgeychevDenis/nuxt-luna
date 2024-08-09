<template>
  <div class="flex my-4">
    <span class="flex flex-1 text-lg text-neutral-500">
      <slot />
      <div class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
    </span>

    <slot name="price"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
