<template>
  <v-navigation-drawer
      :rail="rail"
      absolute
      color="#283E4B"
  >
    <!-- Show/Hide -->
    <v-list-item
      prepend-icon="mdi-chevron-right"
      @click="rail = false"
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <!-- HOME -->
    <v-divider></v-divider>
    <v-list-item
      prepend-icon="mdi-home"
      title="Homepage"
      value="Homepage"
      to="/"
      light
    >
    </v-list-item>
    <v-divider></v-divider>

    <!-- Page -->
    <v-list density="compact" color="white" nav >
      <v-list-item
        v-for="route in routerLinks" :key="route.path"
        :prepend-icon="route.icon"
        :title="route.label"
        :value="route.name"
        :to="route.path"
        light
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "LeftSidebar",
  data() {
    return {
      routerLinks: [],
      rail: true
    }
  },
  mounted() {
    this.routerLinks = this.$router.options.routes.filter(route => true === route.leftSide)
  }
}
</script>
