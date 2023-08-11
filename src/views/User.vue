<template>
  <v-container class="h-full">
    <transition name="fade">
      <Message />
    </transition>
    <transition name="fade">
      <v-card>
        <AstrobinUser v-if="!isLoading" :user="userData" />
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <div>
          <h5 class="text-h5 mt-5">Images of {{ userData.username }} ({{ totalCount}})</h5>
        </div>
        <v-card>
          <masonry-wall
              :items="images"
              :ssr-columns="1"
              :padding="30"
          >
            <template #default="{ item, index }">
              <div :data-index="index">{{ item.title }}</div>
            </template>
          </masonry-wall>
        </v-card>
      </v-card>
    </transition>


<!--    </transition>-->
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinUser from "@/components/content/AstrobinUser.vue";

export default {
  name: "PageUser",
  data () {
    return {
      username: null,
    }
  },
  components: {
    Message,
    AstrobinUser
  },
  mounted: function () {
    this.username = this.$route.params.username ?? 'siovene';
    this.$store.dispatch('user/getUserByName', this.username)
  },
  computed: {
    ...mapState(
      { user: state => state.user}
    ),
    userData () {
      return this.user.data;
    },
    images() {
      return this.user.images;
    },
    totalCount() {
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