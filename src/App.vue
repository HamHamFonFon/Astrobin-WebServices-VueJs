<template>
  <v-app theme="light">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script setup>
import { provide, shallowRef} from "vue";
import router from "@/router";
import layouts from "@/layouts";

const layout = shallowRef('div');
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || layouts['default']
});
provide('app:layout', layout);
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

</style>
