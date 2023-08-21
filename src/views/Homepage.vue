<template>

  <PresentationCard></PresentationCard>
  <v-spacer align="center">This product uses the AstroBin API but is not endorsed or certified by AstroBin.</v-spacer>
  <a ref="pages" id="pages"></a>
  <ItemCard :items="this.processedItems">
    <template v-slot="{ item, index }">
      <v-toolbar height="30">
        <v-toolbar-title class="text-h6 font-weight-bold">
        </v-toolbar-title>
      </v-toolbar>
      <v-container class="text-center" :data-index="index">
        <v-row>
          <v-col cols="12" md="6">
            <v-sheet elevation="0">
              <v-card
                  elevation="0"
                  max-width="800"
                  class="mx-auto my-10"
              >
                <h1
                  style="color: #4a4d6d"
                  class="font-weight-black text-h3 text-lg-h2 text-xl-h1"
                >
                  {{ item.text }}
                </h1>
                <h2 class="text-h6 text-secondary mt-4 mx-auto">
                  {{ item.description }}
                </h2>
              </v-card>
              <div class="text-center">
                <v-btn size="x-large" class="text-white" color="secondary" :to="item.path">Explore</v-btn>
<!--                :color="this.$store.state.customizedTheme.sideBarColor"-->
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="0" md="6">
            <v-card>
              <router-link :to="item.path">
                <v-img
                    height="420"
                    cover
                    :src="item.image"
                ></v-img>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </ItemCard>
</template>

<script>

import menuPages from "@/configs/menu/menuPages";
import PresentationCard from "@/components/home/PresentationCard.vue";
import ItemCard from "@/components/home/ItemCard.vue";

export default {
  name: "HomePage",
  components: {
    PresentationCard,
    ItemCard
  },
  data() {
    return {
      menuPages: menuPages
    }
  },
  computed: {
    processedItems() {
      const allRoutes = this.$router.options.routes;
      return this.buildHomeItem(this.menuPages, allRoutes);
    }
  },
  methods: {
    buildHomeItem: (routesHome, allRoutes) => {
      return routesHome.map(route => {
        let routeName = route.routeName;
        const routeItem = allRoutes.filter(route => route.name === routeName)[0];
        let path = (routeItem.meta.defaultParamValue) ? { name: routeName, params: { 'username': routeItem.meta.defaultParamValue } } : routeItem.path;
        return {
          key: routeItem.meta.key,
          image: routeItem.meta.image,
          icon: routeItem.meta.icon,
          text: routeItem.meta.text,
          description: routeItem.meta.description,
          path: path,
        }
      });

    }
  }
}
</script>