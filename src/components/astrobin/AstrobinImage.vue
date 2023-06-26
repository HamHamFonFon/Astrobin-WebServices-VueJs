<template>
  <div v-if="image">
    <h3>{{ image.title }}</h3>
    <img :src="image.urlGallery" :alt="image.title" />
    <figure>Image by "{{ image.user }}"</figure>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
      updateAstrobinId: null
    };
  },
  created() {
    this.$store.dispatch("images/fetchImageById", this.id);
  },
  computed: {
    ...mapGetters({'image' :'images/getImageById'}),
    image() {
      return this.$store.getters['images/getImageById'](this.astrobinId)
    }
  },
  methods: {
    ...mapActions(
        {'updateAstrobinImage': 'images/updateImageByNewId'}
    ),
    updateAstrobinImage() {
      return this.$store.getters['images/getImageById'](this.updateAstrobinId)
    }
  }
}
</script>