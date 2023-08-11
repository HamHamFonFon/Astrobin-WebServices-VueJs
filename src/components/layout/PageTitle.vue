<template>
  <h1 class="text-h5 mt-5">{{ title }}</h1>
<!--  <h3 class="text-h6 mt-8" v-if="description">{{ description }}</h3>-->
</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: 'PageTitle',
  setup() {
    const route = useRoute();
    const title = route.meta.text;
    const description = route.meta.description;
    return {
      title,
      description
    };
  }
}
</script>