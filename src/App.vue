<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import CountryCard from './components/CountryCard.vue'
import DropDown from './components/DropDown.vue'
import Navbar from './components/Navbar.vue'
import Pagination from './components/Pagination.vue'

export default ({
  name: 'App',
  components: {
    Pagination,
    Navbar,
    CountryCard,
    RouterLink,
    DropDown,
  }
})

</script>

<template>
<div>
    <nav>
      <navbar />
    </nav>
  <drop-down />
  <country-card  />
  <pagination />
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</div>
</template>


