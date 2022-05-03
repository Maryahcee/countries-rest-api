<script setup>
import {useStore} from 'vuex'
import { computed, onMounted } from "@vue/runtime-core";

const store = useStore()

const gettersTheme = computed(() => {
  return store.getters.getTheme
})
onMounted (() => {
  return store.dispatch("fetchTheme")
})
</script>

<template>
   <nav>
    <div class="bg-white shadow-md container flex font-['Nunito Sans'] max-w-full">
      <h1 class="m-5 font-bold text-lg float-left">Where in the World?</h1>
      <div class="flex m-5 mx-auto mr-10">
          <font-awesome-icon class="mr-2  h-6" icon="moon" />
        <button @click="toggleTheme"
        class="dark:text-red-400">Dark Mode</button>
      </div>
    </div>
  </nav>
</template>
