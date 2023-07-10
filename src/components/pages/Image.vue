<template>
  <v-container>
    <v-toolbar
      flat
    >
      <v-toolbar-title class="text-h6">
        Astrobin image
      </v-toolbar-title>
    </v-toolbar>
    <v-divider dark></v-divider>

    <div class="msgInformation">
      <v-text-field label="AstrobinId" placeholder="Change astrobinId" class="pt-5 mr-2" variant="outlined" clearable v-model="newAstrobinId" disabled></v-text-field>
      <v-btn x-large variant="outlined" @click="fetchImageById" disabled=""> CHANGE </v-btn>
    </div>

    <v-divider></v-divider>

    <transition>
      <Message />
    </transition>
    <transition>
      <AstrobinImage v-if="!isShow" :image="image"></AstrobinImage>
    </transition>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
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
  mounted() {
    this.$store.dispatch("images/fetchImageById", this.$route.params.astrobinId);
  },
  computed: {
    ...mapGetters(
      {'image': 'images/getImageById'},
      {'isShow': 'message/getShow'}
    ),
    image() {
      return this.$store.getters['images/getImageById'](this.$route.params.astrobinId)
    },
    isShow() {
      return this.$store.getters['message/getShow']
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.msgInformation {
  display: flex;
  align-items: center;
  padding: 0 0.2em;
}
</style>