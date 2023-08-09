<template>
  <div class="pa-5">
    <!-- First Item -->
    <v-row  class="flex-0" dense>
      <v-col cols="12" xl="4">
        <v-card cols="12" xl="6">
          <v-card class="card-shadow" height="420">
            <PresentationCard></PresentationCard>
          </v-card>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" xl="4">
        <v-card class="card-shadow h-full" height="420" v-for="homeItem in processedItem" v-bind:key="homeItem.key">
          <ItemCard :item="homeItem"></ItemCard>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import homeMenuItems from "@/configs/menu/menuPages";
import ItemCard from "@/components/home/ItemCard.vue";
import PresentationCard from "@/components/home/PresentationCard.vue";
export default {
  name: "HomePage",
  components: {
    PresentationCard,
    ItemCard
  },

  computed: {
    processedItem() {
      const allRoutes = this.$router.options.routes;
      return this.buildHomeItem(this.homeItems, allRoutes);
    }
  },
  data() {
    return {
      homeItems: homeMenuItems
    }
  },
  methods: {
    buildHomeItem: (homeItems, allRoutes) => {
      return homeItems.map(route => {
        let routeName = route.routeName;
        const routeItem = allRoutes.filter(route => route.name === routeName)[0];
        return {
          key: routeItem.meta.key,
          image: routeItem.meta.image,
          icon: routeItem.meta.icon,
          text: routeItem.meta.text,
          description: routeItem.meta.description,
          path: route
        }
      });

    }
  }
}
</script>