<template>
  <v-container
      fluid
      class="home-hero align-center"
  >
        <v-toolbar
            extended
            transparent
        >
          <v-toolbar-title class="mx-auto text-white">
            <span>Welcome to astrobin API</span>
            <h2>Discover wonders and mysteries of the universe.</h2>
          </v-toolbar-title>
        </v-toolbar>

    <v-row>
      <v-col cols="12" md="6" v-for="(page, index) in this.routerLinks" v-bind:key="index">
        <v-card
          class="mx-auto"
          max-width="400"
          flat
        >
          <v-img
            :src="this.bckImg[index]"
            height="200px"
            cover
            align="center"
          >
            <v-icon
              :icon="page.icon"
              class="ma-2 icon-border"
              size="64"

            ></v-icon>
          </v-img>

          <v-divider></v-divider>
          <v-card-title class="text-h4">
            {{ page.label }}
          </v-card-title>

          <v-card-actions class="pt-0">
            <router-link :to="page.path">
              <v-btn variant="text"> Click </v-btn>
            </router-link>

          </v-card-actions>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import backgroundImg1 from '@/assets/images/bg-1.jpg'
import backgroundImg2 from '@/assets/images/bg-2.jpg'
import backgroundImg3 from '@/assets/images/bg-3.jpg'
import backgroundImg4 from '@/assets/images/bg-5.jpg'

export default {
  name: "HomePage",
  data() {
    return {
      pageTitle: 'Homepage',
      routerLinks: [],
      bckImg: [
        backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4
      ]
    }
  },
  mounted() {
    this.routerLinks = this.$router.options.routes.filter(route => true === route.leftSide)
    this.$emit('updatePageTitle', this.pageTitle);
  },
}
</script>

<style scoped>
.home-hero {
  background-color: #161B22;
  /*background: url("https://astro-otter.space/build/images/background/bg-1.webp");*/
  background-size: cover;
  height: 100vh;
}

.icon-border {
  border: 5px solid;
  border-radius: 50%;
  padding: 0.7em;
  color: white;
}
</style>