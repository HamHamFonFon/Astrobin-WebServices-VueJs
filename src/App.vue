<template>
  <v-layout class="rounded rounded-md">
    <!-- Navbar -->
    <LeftSidebar />
    <!-- Header -->
    <HeaderTitle :initialPageTitle="pageTitle" />
    <!-- Body -->
    <v-main class="pt-2 pt-sm-2 pt-xs-2 pt-md-0 pt-lg-0 pt-xl-0">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import LeftSidebar  from '@/components/layout/LeftSidebar.vue'
import HeaderTitle from '@/components/layout/Header.vue'
// import VueBaseLayout from '@/layouts/layout.vue'

export default {
  name: 'App',
  components: {
    LeftSidebar,
    HeaderTitle
  },
  data() {
    return {
      pageTitle: '',
    }
  },
  // computed: {
  //   component() {
  //     return VueBaseLayout
  //   }
  // }
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

a {
  text-decoration: none;
}

.bottom-menu {
  position: absolute;
  width: 100%;
  bottom: 0;
}


</style>
