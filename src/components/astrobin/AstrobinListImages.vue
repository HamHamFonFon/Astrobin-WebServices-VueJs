<template>
  <div>
    <span>Résults: {{ totalCount }}</span>
  </div>
  <v-spacer></v-spacer>
  <v-container>

    <masonry-wall
      :items="images"
      :min-columns="1"
      :max-columns="5"
      :column-width="300"
      :gap="30"
    >
      <template #default="{ item }">

          <v-card>
            <router-link :to="{ name: 'image', params: { astrobinId: item.astrobin_id } }">
              <v-img
                :src="item.urlRegular"
                :lazy-src="item.urlGallery"
                cover
                class="bg-grey-lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-card-title class="text-h6 text-white d-flex flex-column">
                  <p class="mt-4">{{ item.title }}</p>
                </v-card-title>
              </v-img>
            </router-link>
            <v-card-text class="pt-6">
              <div class="font-weight-light text-grey text-h6 mb-2">
                By <router-link :to="{name: 'user', params: { username : item.user }}">{{ item.user }}</router-link>
              </div>
            </v-card-text>
          </v-card>

      </template>
    </masonry-wall>
  </v-container>
</template>

<script>
export default {
  name: "AstrobinListImages",
  props: {
    images: Object,
    totalCount: Number
  },
  methods: {
  }
}
</script>

<style scoped>

</style>