<script setup>
import {useStore} from 'vuex'
import { computed, onMounted } from "@vue/runtime-core";
 
const store = useStore()

const countries = computed(() => {
  return store.getters.getAllCountries
})
 
onMounted(() => {
  store.dispatch("fetchAllCountries")
})
</script>

<template>
  <div class="flex flex-wrap">
    <!--flags-grid-container-->
  <div class="container max-w-full grid grid-cols-4 auto-cols-fr  gap-10  m-3 font-['Nunito Sans'] bg-white  ">
     <!--flag01-->
    <div v-for='gettersCountry in countries' :key='gettersCountry' class="flex flex-wrap flex-col items-center mx-auto w-64 h-72 ring-1 ring-black ring-opacity-5 rounded-md">
      <img class="w-full h-32 mb-4 rounded-t-md" :src="gettersCountry.flags.png" alt="flag">
      <!--Info card section-->
      <card class="container w-3/4 h-38 justify-center items-center mx-auto ">
        <h1 class="font-extrabold mb-2 text-lg">{{ gettersCountry.name }}</h1>
        <p class="text-md font-normal"> <span class="font-bold">Population:</span> {{ gettersCountry.population }}</p>
        <p class="text-md font-normal"> <span class="font-bold">Region:</span> {{ gettersCountry.region }} </p>
        <p class="text-md font-normal"><span class="font-bold">Capital:</span> {{ gettersCountry.capital }} </p>
      </card>
    </div>
  </div>
</div>
</template>

