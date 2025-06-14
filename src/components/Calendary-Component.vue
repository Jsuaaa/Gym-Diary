<script lang="ts" setup>
import { ref } from 'vue'

// Año actual
const currentYear: number = new Date().getFullYear()

// Día del calendario (puede ser `Date` o `null`)
type CalendarDay = Date | null

// Calendario completo: array de semanas, cada semana con 7 días
type Calendar = CalendarDay[][]

// Genera el calendario completo
function generateCalendar(year: number): Calendar {
  const startDate = new Date(year, 0, 1)
  const endDate = new Date(year, 11, 31)
  const calendar: Calendar = []
  const day = new Date(startDate)

  while (day <= endDate) {
    const week: CalendarDay[] = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(day)
      date.setDate(day.getDate() + i)
      return date.getFullYear() === year ? new Date(date) : null
    })
    calendar.push(week)
    day.setDate(day.getDate() + 7)
  }

  return calendar
}

// Instancia del calendario
const calendar = ref<Calendar>(generateCalendar(currentYear))

// Días de la semana
const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Etiquetas de los meses
const monthLabels: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

// Formatear fecha para tooltip
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
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
      <div class="min-w-[900px] md:w-full mx-auto">
        <!-- Encabezados de meses -->
        <div class="flex ml-12">
          <div
            v-for="(label, index) in monthLabels"
            :key="index"
            class="text-xs text-gray-500 w-10 text-center"
          >
            {{ label }}
          </div>
        </div>

        <div class="flex">
          <!-- Días de la semana -->
          <div class="flex flex-col mr-1">
            <div
              v-for="(day, index) in weekDays"
              :key="index"
              class="text-xs text-gray-500 h-6 flex items-center justify-end pr-1"
            >
              {{ day }}
            </div>
          </div>

          <!-- Tabla -->
          <div class="flex">
            <div v-for="(week, wIndex) in calendar" :key="wIndex" class="flex flex-col">
              <div
                v-for="(date, dIndex) in week"
                :key="dIndex"
                class="w-6 h-6 m-[1px] rounded bg-green-200 hover:bg-green-400 relative group"
                :title="date ? formatDate(date) : ''"
              >
                <!-- Tooltip opcional más vistoso -->
                <div
                  v-if="date"
                  class="absolute z-10 bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 px-2 py-1 text-xs text-white bg-black rounded shadow"
                >
                  {{ formatDate(date) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
