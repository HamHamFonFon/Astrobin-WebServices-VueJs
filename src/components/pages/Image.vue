<template>
  <v-container>
    <v-toolbar flat >
      <v-toolbar-title class="text-h6">
        Astrobin image
      </v-toolbar-title>
    </v-toolbar>
    <v-divider dark></v-divider>

    <div class="msgInformation">
      <v-text-field label="AstrobinId" placeholder="Change astrobinId" class="pt-5 mr-2" variant="outlined" clearable v-model="newAstrobinId"></v-text-field>
      <v-btn x-large variant="outlined" @click="updateAstrobinImage"> CHANGE </v-btn>
    </div>

    <v-divider></v-divider>

    <transition name="fade">
      <Message />
    </transition>
    <transition name="fade">
      <AstrobinImage v-if="!isShow" :image="image"></AstrobinImage>
    </transition>

  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import AstrobinImage from "@/components/astrobin/AstrobinImage.vue"
import Message from "@/components/layout/Message.vue";

export default {
  name: "PageImage",
  components: {
    AstrobinImage,
    Message
  },
  data () {
    return {
      newAstrobinId: null
    }
  },
  props: [
    'astrobinId'
  ],
  // Run WS at mount
  mounted() {
    this.$store.dispatch("images/fetchImageById", this.$route.params.astrobinId);
  },
  computed: {
    // Getter store Image
    ...mapGetters(
      {'image': 'images/getImageById'}
    ),
    image() {
      return this.$store.getters['images/getImageById'](this.$route.params.astrobinId)
    },

    ...mapState({show: state => state.message.show}),
    isShow() {
      return this.show
    }
  },
  methods: {
    updateAstrobinImage() {
      this.$store.dispatch("images/fetchImageById", this.newAstrobinId);
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