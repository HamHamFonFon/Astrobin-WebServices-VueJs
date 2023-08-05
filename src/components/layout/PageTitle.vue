<template>
  <h1 class="text-h5 mt-5">{{ title }}</h1>
</template>

<script>
import {useRoute} from "vue-router";
import menuPages from "@/configs/menu/menuPages";

export default {
  name: 'PageTitle',
  setup() {
    const route = useRoute();
    const routeName = route.name;

    const page = menuPages.filter(page => page.routeName = routeName);
    const title = page.text
    return { routeName, title };
  }
}
</script>