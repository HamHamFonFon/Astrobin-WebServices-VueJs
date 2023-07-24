<template>
  <div id="today">

    <router-link :to="{ name: 'image', params: { astrobinId: today.astrobinImageId } }">
      <v-img
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
      </v-img>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AstrobinToday",
  props: {
    today: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>