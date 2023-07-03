<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
      <v-list-item
        title="Astrobin API"
        nav
      ></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>

      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "LeftSidebar",
  data() {
    return {
      drawer: true,
      rail: true,
    }
  }
}
</script>
