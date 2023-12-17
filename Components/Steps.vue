<template>
  <div class="flex justify-center items-center">
    <div class="flex justify-center items-center">
      <span
        :class="active === 1 ? 'bg-green-700 text-white' : ''"
        class="w-8 h-8 border border-gray-500 rounded-full flex justify-center items-center text-sm"
        >1
      </span>
    </div>
    <div class="flex justify-center items-center">
      <span
        :class="active === 2 ? 'bg-green-700 h-1' : 'bg-gray-300 h-0.5'"
        class=" w-96"
      ></span>
      <span
        :class="active === 2 ? 'bg-green-700 text-white' : ''"
        class="w-8 h-8 border border-gray-500 rounded-full flex justify-center items-center text-sm"
        >2</span
      >
    </div>
    <div class="flex justify-center items-center">
      <span
        :class="active === 3  ? 'bg-green-700 h-1' : 'bg-gray-300 h-0.5'"
        class=" w-96 "
      ></span>
      <span
        :class="active === 3 ? 'bg-green-700 text-white' : ''"
        class="w-8 h-8 border border-gray-500 rounded-full flex justify-center items-center text-sm"
        >3</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  active?: string;
}>();
</script>

<style>
</style>