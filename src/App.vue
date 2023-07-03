<template>
  <v-card theme="dark">
    <v-layout>

      <!-- Navbar -->
      <LeftSidebar></LeftSidebar>

      <!-- Body -->
      <v-main theme="dark">
        <router-view />
      </v-main>

    </v-layout>
  </v-card>
</template>

<script>
import LeftSidebar  from '@/components/layout/LeftSidebar.vue'

export default {
  name: 'App',
  components: {
    LeftSidebar
  }
}
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
