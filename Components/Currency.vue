<template>
  <div class="border flex mx-10 my-5 rounded-xl">
    <select
      id="countries"
      class="w-2/4 p-3 bg-white text-black rounded-r-xl"
      v-model="dataCurrancy.unit"
    >
      <option
        v-for="(currancy, index) in currancyStore.currancyList"
        :key="index"
      >
        {{ currancy.baseAsset }}
      </option>
    </select>
    <input
    @change="calculated"
      v-model="dataCurrancy.amount"
      type="text"
      id="first_name"
      class="w-3/4 bg-gray-50 p-3 rounded-l-xl border-r-2"
      placeholder="count"
      required
      number
    />
  </div>
  <div class="border flex mx-10 mt-10 rounded-xl">
    <input
      v-model="dataCurrancy.finalPrice"
      type="text"
      class="w-3/4 p-3 bg-white text-black rounded-r-xl"
      disabled
    />
    <span class="w-1/4 bg-gray-50 p-3 rounded-l-xl border-r-2 text-black"
      >تومان</span
    >
  </div>
</template>

<script setup>
import { useCurrencyStore } from "../stores/Currancy";
const currancyStore = useCurrencyStore();
const props = defineProps({
  dataCurrancy: {
    type: Object,
    required: true,
  },
});


</script>

<style>
</style>