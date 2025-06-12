<script setup lang="ts">
import CardComponent from '@/components/Card-Component.vue'
import HeaderComponent from '@/components/Header-Component.vue'
import { Target, TrendingUp, Calendar } from 'lucide-vue-next'
</script>

<template>
  <!-- Component Container -->
  <div class="bg-gray-100 lg:px-24">
    <!-- Header -->
    <HeaderComponent />

    <!-- Card Container -->
    <div class="w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
      <CardComponent
        class="w-full h-full"
        title="Days Trained"
        days="0"
        date="This Year"
        :Icon="Target"
      />
      <CardComponent
        class="w-full h-full"
        title="Current Streak"
        days="0"
        date="Consecutive Days"
        :Icon="TrendingUp"
      />
      <CardComponent
        class="w-full h-full"
        title="Consistency"
        days="0%"
        date="Of the Year"
        :Icon="Calendar"
      />
    </div>
  </div>
</template>

<style lang=""></style>
