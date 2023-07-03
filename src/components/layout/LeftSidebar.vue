<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
      <v-list-item
          :prepend-avatar="imageLogo"
          title="Astrobin API"
          nav
      >
        <template v-slot:append>
          <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
          <v-list-item v-for="route in routerLinks" :key="route.path"
            :prepend-icon="route.icon"
            :title="route.label"
            :value="route.name"
            :to="route.path"
          >
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>

import imageLogo from '@/assets/images/astro_otter_200-200.png'

export default {
  name: "LeftSidebar",
  data() {
    return {
      imageLogo: imageLogo,
      routerLinks: [],
      drawer: true,
      rail: true,
    }
  },
  mounted() {
    this.routerLinks = this.$router.options.routes
  }
}
</script>
