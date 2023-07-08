<template>
  <article>
    <v-card
      class="mx-auto"
      wi
    >
      <v-card-item>
        <v-img
          height="400"
          :src="image.urlHd"
        >
        </v-img>
        <v-card-title>{{ image.title }}</v-card-title>
        <v-card-subtitle>{{ image.user}} - {{image.uploaded}}</v-card-subtitle>
        <v-card-actions>
          <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="show = !show"
          >
            More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>{{ image.description }}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card-item>
    </v-card>
  </article>
</template>

<script>
export default {
  name: "AstrobinImage",
  data () {
    return {
      show: false // 'haqtej'
    }
  },
  props: {
    image: {
      default: null,
      type: Object
    }
  }
}
</script>