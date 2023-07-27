<template>
  <v-container>
    <transition name="fade">
      <Message/>
    </transition>
    <transition name="fade">
      <div v-if="!isLoading">
        {{ userData }}

        <AstrobinListImages v-if="!isLoading && 0 < totalImages" :images="listImages" :totalCount="totalImages"></AstrobinListImages>
      </div>
    </transition>
  </v-container>


</template>

<script>
import { mapState } from "vuex";

import Message from "@/components/layout/Message.vue";

export default {
  name: "PageUser",
  data () {
    return {
      username: null,
    }
  },
  components: {
    Message
  },
  mounted() {
    this.username = this.$route.params.username;
    this.$store.dispatch('user/getUserByName', this.username)
  },
  computed: {
    ...mapState(
      { user: state => state.user}
    ),
    userData () {
      return this.user.data;
    },
    listImages() {
      return this.user.listImages;
    },
    totalImages() {
      return this.user.listImages.length;
    },
    isLoading() {
      return this.isLoading
    }
  }
}
</script>

<style scoped>

</style>