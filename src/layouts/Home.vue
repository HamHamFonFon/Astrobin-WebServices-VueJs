<template>
  <!-- Navbar -->
  <LeftSidebar />
  <!-- Header -->
  <AppBar />

  <!-- Body -->
  <v-main class="main-container"
    v-touch="{
      left: () => (this.$store.commit('customizedTheme/setShowSideBar', false)),
      right: () => (this.$store.commit('customizedTheme/setShowSideBar', true))
    }"
  >
    <div class="flex-fill">
      <slot></slot>
    </div>
  </v-main>
</template>

<script>

import LeftSidebar  from '@/components/layout/LeftSidebar'
import AppBar from '@/components/layout/AppBar'

export default {
  name: 'HomeLayout',
  components: {
    LeftSidebar,
    AppBar
  }
}
</script>

<style>
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>