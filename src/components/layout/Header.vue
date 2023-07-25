<template>
  <v-app-bar color="#1B2A32" class="flex-grow-0 transparent" app dark>
    <v-avatar :image="imageLogo" @click="rail = false"></v-avatar>
    <v-toolbar-title class="text-white">Astrobin API <span>{{ pageTitle }}</span> </v-toolbar-title>
  </v-app-bar>
</template>
<script>

import imageLogo from '@/assets/images/astro_otter_200-200.png'

export default {
  name: "HeaderTitle",
  props: {
    initialPageTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      pageTitle: this.initialPageTitle,
      imageLogo: imageLogo,
    }
  },
  methods: {
    updatePageTitle(newTitle) {
      this.pageTitle = newTitle;
    },
  },
  mounted() {
    // Set up event listener to receive pageTitle updates from child components
    this.$emit('updatePageTitle', this.updatePageTitle);
  },
  // beforeUnmount() {
  //   // Clean up the event listener to prevent memory leaks
  //   this.$root.$off('updatePageTitle', this.updatePageTitle);
  // },
}
</script>

<style scoped>

</style>