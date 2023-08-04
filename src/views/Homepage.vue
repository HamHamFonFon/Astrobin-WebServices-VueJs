<template>
  <div class="pa-5">
    <!-- First Item -->
    <v-row  class="flex-0" dense>
      <v-col cols="12" xl="4">
        <v-card cols="12" xl="6">
          <v-card class="card-shadow" height="420">
            <span>Welcome to astrobin API</span>
            <h2>Discover wonders and mysteries of the universe.</h2>
          </v-card>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" xl="4">
        <v-card class="card-shadow" height="420" v-for="homeItem in this.homeItems" v-bind:key="homeItem.key">
          <HomeCard :item="homeItem"></HomeCard>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import configs from "@/configs";
import HomeCard from "@/components/content/HomeCard.vue";
export default {
  name: "HomePage",
  components: {
    HomeCard
  },
  data() {
    return {
      pageTitle: 'Homepage',
      routerLinks: [],
      homeItems: configs.homeItems
    }
  },
  mounted() {
    this.$emit('updatePageTitle', this.pageTitle);
  },
}
</script>