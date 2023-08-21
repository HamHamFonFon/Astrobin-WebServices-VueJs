<template>
  <v-app-bar
    density="default"
    color="appBarColor"
  >
    <div class="px-2 d-flex align-center justify-space-between w-100">
      <v-app-bar-nav-icon
        @click="showOrHideSideBar"
      >
      </v-app-bar-nav-icon>
      <v-app-bar-title
        color="greytext"
      >
        <span>Astrobin API</span>
        <v-divider vertical thickness="2" color="black" class="ml-5 mr-1"></v-divider>
      </v-app-bar-title>

    </div>
  </v-app-bar>
</template>
<script>

export default {
  name: "AppBar",
  props: {
    initialPageTitle: {
      type: String,
      default: '',
    },
  },
  methods: {
    updatePageTitle(newTitle) {
      this.pageTitle = newTitle;
    },
    showOrHideSideBar() {
      const newValue = !this.$store.state.customizedTheme.showSideBar;
      this.$store.commit('customizedTheme/setShowSideBar', newValue);
    }
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