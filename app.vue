

<template>
  <div class="container py-20" dir="rtl">
    <Steps :active="active" />
    <div class="columns-1 my-20 flex justify-center">
      <div class="w-2/4 h-96 border shadow-2xl rounded-2xl py-10">
        <Currency v-if="active === 1" :dataCurrancy.sync="dataCurrancy" />
        <div class="flex justify-center pt-20">
          <button
            v-if="active !== 3"
            @click="submit"
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            مرحله بعد
          </button>
          <button
            @click="active--"
            type="button"
            class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            مرحله قبل
          </button>
          <button
            v-if="active === 3"
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from "./stores/Currancy";
let active = ref(1);
const dataCurrancy = reactive({
  unit: "USDT",
  amount: 1,
  finalPrice: "",
});

const currancyStore = useCurrencyStore();
onBeforeMount(async () => {
  await currancyStore.fetchcurrancyHandler();
  await calculated();
});
const findCurrency = () => {
  return currancyStore.currancyList.find(
    (item) => item.baseAsset == dataCurrancy.unit
  );
};
const calculated = () => {
  const currency = findCurrency();
  dataCurrancy.finalPrice = currency.stats.lastPrice * dataCurrancy.amount;
};
function submit() {
  console.log(active);
  active.value++;
}
watch(dataCurrancy, () => {
  calculated();
});
</script>

