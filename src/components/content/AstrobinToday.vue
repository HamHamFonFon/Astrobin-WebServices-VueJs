<template>
  <div id="today">
    <router-link :to="{ name: 'image', params: { astrobinId: today.astrobinImageId } }">
      <v-parallax
        :src="today.image.urlHd"
        cover
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2 text-white">
            <span>{{ today.date }}</span>
            <div class="text-h4 text-white">{{ today.image.title }}</div>
            <div class="text-h5 text-white">{{ today.image.user }}</div>
          </div>
        </v-row>
      </v-parallax>
    </router-link>
  </div>

  <v-spacer></v-spacer>
  <v-divider></v-divider>
  <v-container>
    <div>
      <h5 class="text-h5 mt-5">Last 20 images of the day</h5>
    </div>
    <v-card>
      <masonry-wall
          :items="items"
          :ssr-columns="1"
          :padding="30"
      >
        <template #default="{ item, index }">
          <v-card
              class="ma-3"
              :data-index="index"
          >
            <router-link :to="{ name: 'image', params: { astrobinId: item.id } }">
              <v-img
                  :src="item.image"
                  :lazy-src="item.image"
                  cover
              >
                <v-card-title class="text-h6 text-white">{{ item.title }}</v-card-title>
              </v-img>
            </router-link>
            <v-card-subtitle class="pt-4">
              <router-link :to="{ name: 'user', params: { username: item.user } }">{{ item.user }}</router-link> -  {{ item.date }}
            </v-card-subtitle>
          </v-card>
        </template>
      </masonry-wall>
    </v-card>
  </v-container>



</template>

<script>
export default {
  name: "AstrobinToday",
  props: {
    today: {
      type: Object
    },
    items: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>