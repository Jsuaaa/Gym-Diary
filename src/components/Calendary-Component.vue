<script lang="ts" setup>
// Months
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Days
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>
<template>
  <!-- Card Container -->
  <div
    class="w-full p-4 md:p-6 flex flex-col justify-between items-center rounded-md bg-white shadow-md"
  >
    <!-- Header -->
    <div class="w-full flex flex-col justify-between items-center mb-3">
      <h1 class="font-bold text-xl text-left">Training Schedule</h1>
      <p class="text-sm text-gray-700">See how your fitness activity has been so far this year.</p>
    </div>

    <!-- Calendary -->
    <div class="w-full overflow-x-auto">
      <div class="min-w-[480px] md:min-w-full md:w-full mx-auto flex justify-center items-center">
        <table class="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th class="p-2 text-sm" v-for="month in months" :key="month">
                {{ month }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="day in days" :key="day">
              <td
                v-for="month in months"
                :key="month + day"
                class="w-6 h-6 border border-gray-200 bg-green-200 hover:bg-green-400 transition-colors"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
