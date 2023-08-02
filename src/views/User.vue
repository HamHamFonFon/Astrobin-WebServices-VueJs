<template>
  <v-container fluid>
    <transition name="fade">
      <Message/>
    </transition>
<!--    <transition name="fade">-->
<!--        <v-avatar v-if="null !== userData.avatar" :image="userData.avatar"></v-avatar>-->
<!--        <v-title>{{ userData.username }}</v-title>-->
<!--    </transition>-->

    <masonry-wall
      :items="listImages"
      :min-columns="3"
      :max-column="6"
      :ssr-columns="1"
      :column-width="300"
      :gap="5"
    >
      <template #default="{ item, index }">
        <v-card
            color="grey-lighten-1"
            :class="['ma-4']"
            :data-index="index"
        >
          <v-img
            cover
            :src="item.image"
          >
            <div class="d-flex fill-height align-center justify-center">
              <div class="text-h4 text-white">{{ item.date }}
                <div class="text-h6 text-white">{{ item.title }}</div>
              </div>
            </div>
          </v-img>
        </v-card>
      </template>

    </masonry-wall>
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
  mounted: function () {
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
      return this.user.images;
    },
    totalImages() {
      return this.user.data.image_count;
    },
    isLoading() {
      return this.isLoading
    }
  }
}
</script>

<style scoped>

</style>