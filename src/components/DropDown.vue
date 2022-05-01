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
 <section class="pt-5 container max-w-full font-['Nunito Sans'] flex">
   <!-- search bar -->
    <div class="w-1/3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center bg-white h-16 m-5 px-5  rounded-md">
        <input placeholder="Search for a country" type="text" class="italic rounded-md p-2 w-full outline-none">
    </div>
    <!-- Drop-down -->
    <div class="mx-auto mr-8 text-Light-Mode-Input bg-white m-3 pt-5  rounded-md">
        <div class="w-full inline-block text-left ">
            <select  class="inline-flex
                            w-full rounded-md ring-1 
                            ring-black ring-opacity-5
                            outline-none 
                            shadow-sm px-4 py-2
                            bg-white text-sm
                            font-medium text-gray-700 
                            hover:bg-gray-50 
                            focus:outline-none" 
                            @change="changeRegion($event)">
                <option value="" selected disabled>Filter by Region</option>
                <option >card</option>
            </select>
            <br>
              <p value="gettersCountry.region ">{{ gettersCountry }}</p>
        </div>
        <div class=" origin-top-right absolute  right-5 mt-3 w-56 rounded-md shadow-lg bg-white   focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="hidden  ring-1 ring-black ring-opacity-5 py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Africa</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">America</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Asia</a>
          </div>
      </div>
    </div>
 </section>
</template>