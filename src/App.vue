<template>
  <v-app theme="light" :data-layout="layoutName">
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>

import DefaultLayout from '@/layouts/Default.vue'
import HomeLayout from '@/layouts/Home.vue'
import PageLayout from '@/layouts/Page.vue'
import { useRoute } from "vue-router";

const layouts = {
  default: DefaultLayout,
  home: HomeLayout,
  page: PageLayout
};

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const layoutName = route.meta.layout;
    const currentLayout = (!layoutName) ? DefaultLayout : layouts[layoutName];
    const isRouterLoaded = (route.name !== null);

    return {
      layoutName,
      currentLayout,
      isRouterLoaded
    }
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

a {
  text-decoration: none;
}

</style>
