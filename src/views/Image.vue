<template>
  <v-container class="h-full">
    <v-card class="d-flex pt-4 px-4 mb-3">
      <v-text-field
          type="search"
          label="AstrobinId"
          placeholder="Change astrobin image Id"
          variant="outlined"
          clearable
          v-model="newAstrobinId"
          append-inner-icon="mdi-magnify"
          @click:append-inner="updateAstrobinImage"
          @keydown.enter="updateAstrobinImage"
      ></v-text-field>
    </v-card>
    <v-spacer></v-spacer>
    <v-divider></v-divider>

    <transition name="fade">
      <Message />
    </transition>

    <transition name="fade">
      <AstrobinImage v-if="!isLoading && image" :image="image"></AstrobinImage>
    </transition>

  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import AstrobinImage from "@/components/content/AstrobinImage.vue"
import Message from "@/components/layout/Message.vue";

export default {
  name: "PageImage",
  components: {
    AstrobinImage,
    Message
  },
  data () {
    return {
      pageTitle: 'Astrobin image',
      astrobinId: null,
      newAstrobinId: null
    }
  },
  // Run WS at mount
  mounted: function () {
    this.astrobinId = this.$route.params.astrobinId;
    this.$store.dispatch("images/fetchImageById", this.astrobinId);
  },
  computed: {
    // Getter store Image
    ...mapGetters(
      {'image': 'images/getImageById'}
    ),
    image() {
      return this.$store.getters['images/getImageById'](this.astrobinId)
    },
    ...mapState(
      { loading: state => state.message.loading }
    ),
    isLoading() {
      return this.loading;
    }
  },
  methods: {
    updateAstrobinImage() {
      this.astrobinId = this.newAstrobinId;
      this.$store.dispatch("images/fetchImageById", this.astrobinId);
    }
  }
}
</script>

<style scoped>
.msgInformation {
  display: flex;
  align-items: center;
  padding: 0 0.2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>