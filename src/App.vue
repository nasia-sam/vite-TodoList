<template>
  <NavBar class="absolute inset-x-0 top-0" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from 'src/components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>