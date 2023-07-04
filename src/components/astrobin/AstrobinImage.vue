<template>
  <article>
    <div v-if="!loaded">
      <p>Load Astrobin data...</p>
    </div>

    <v-card v-else-if="!oaded"
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
import { mapGetters } from "vuex";

export default {
  name: "AstrobinImage",
  props: {
    astrobinId: {
      default: '',
      type: String,
      required: true
    }
  },
  data() {
    return {
      updateAstrobinId: null,
      show: false,
    };
  },
  mounted() {
    this.$store.dispatch("images/fetchImageById", this.astrobinId);
  },
  computed: {
    ...mapGetters(
        {'image': 'images/getImageById'},
        {'loaded': 'images/loaded'}
    ),
    image() {
      return this.$store.getters['images/getImageById'](this.astrobinId)
    },
    loaded() {
      return this.$store.getters['images/loaded']
    }
  },
  /*methods: {
    ...mapActions(
        {'updateAstrobinImage': 'images/updateImageByNewId'}
    ),
    updateAstrobinImage() {
      return this.$store.getters['images/getImageById'](this.updateAstrobinId)
    }
  }*/
}
</script>