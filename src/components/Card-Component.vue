<script setup lang="ts">
const props = defineProps<{
  title: string
  days: number
  date: string
  Icon: Component
}>()
</script>

<template>
  <!-- Card Container -->
  <div class="w-full p-6 flex flex-col justify-between items-center bg-white rounded-md shadow-md">
    <!-- Title and Icon -->
    <div class="w-full flex justify-between items-center">
      <h1 class="text-base font-semibold">{{ title }}</h1>
      <component class="w-5 h-5" :is="props.Icon" />
    </div>

    <!-- Days -->
    <div class="w-full">
      <p class="font-bold text-2xl">{{ days }}</p>
    </div>

    <!-- Date -->
    <div class="w-full">
      <p class="text-xs text-gray-700">{{ date }}</p>
    </div>
  </div>
</template>

<style scoped></style>
