<template>
  <v-list
    class="menu-list"
    nav
    dense
    color="primary"
  >

  </v-list>
</template>

<script>
export default {
  name: "MenuSidebar",
  data() {
    return {
      routerLinks: [],
      rail: true
    }
  },
  mounted() {
    this.routerLinks = this.$router.options.routes.filter(route => true === route.leftSide)
  },
}
</script>