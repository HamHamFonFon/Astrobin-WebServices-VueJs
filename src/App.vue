<template>
  <v-card theme="light">
    <v-layout>

      <!-- Navbar -->
      <LeftSidebar></LeftSidebar>

      <!-- Body -->
      <v-main>
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
@import url('https://fonts.googleapis.com/css?family=Roboto');


#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
