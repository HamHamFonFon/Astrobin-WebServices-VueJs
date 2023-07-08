<template>
  <v-card theme="light">
    <v-layout>

      <!-- Navbar -->
      <LeftSidebar></LeftSidebar>

      <!-- Body -->
      <v-main theme="light">
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
  margin-top: 60px;
}
</style>
