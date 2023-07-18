<template>
  <div><p>Résults: {{ images.totalCount }}</p></div>
  <v-spacer></v-spacer>
  <v-row>
    <v-col
      v-for="(image, n) in images.images"
      :key="n"
      class="d-flex child_flex"
      cols="3"
    >
      <router-link :to="{ name: 'image', params: { astrobinId: image.astrobin_id } }">
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
            :src="image.urlRegular"
            :lazy-src="image.urlGallery"
            aspect-ratio="1"
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
          </v-img>
          <v-card-text>
            <div>"{{ image.title }}" by {{ image.user }}</div>
          </v-card-text>
        </v-card>
      </router-link>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "AstrobinListImages",
  props: {
    images: {}
  }
}
</script>

<style scoped>

</style>