<template>
  <v-container class="h-full">

    <transition name="fade">
      <Message />
    </transition>

    <transition name="fade">
      <div v-if="!isLoading ">
        <AstrobinUser :user="userData" />

        <div>
          <h5 v-if="totalCount" class="text-h5 mt-5">Images of {{ userData.username }} ({{ totalCount}})</h5>
          <v-spacer></v-spacer>
          <v-select
              v-model="selectedSort"
              :disabled="0 === totalCount"
              label="Sort by..."
              :items="sortResults"
              item-value="key"
              item-title="value"
              variant="outlined"
              @change="sortImages"
              clearable
          ></v-select>
        </div>

        <AstrobinListImages  v-if="0 < totalCount" :images="sortedImages" :columns="5" :gap="0">
          <template v-slot="{ image, index }">
            <v-col :data-index="index">
              <v-img
                  :src="image.urlRegular"
                  :lazy-src="image.urlGallery"
                  class="bg-grey-lighten-2"
                  height="300"
                  cover
              ></v-img>
            </v-col>
          </template>
        </AstrobinListImages>

        <v-row align="center" justify="center">
          <v-btn
              prepend-icon="mdi-plus"
              variant="outlined"
              primary
              v-if="totalCount > countItems"
              @click="moreItems"
          > <span>Show more</span> </v-btn>
        </v-row>
      </div>
    </transition>


<!--    </transition>-->
  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinUser from "@/components/content/AstrobinUser.vue";
import AstrobinListImages from "@/components/astrobin/AstrobinListImages.vue";

export default {
  name: "PageUser",
  data () {
    return {
      username: null,
    }
  },
  components: {
    AstrobinListImages,
    Message,
    AstrobinUser,
  },
  created() {
    this.$store.commit('message/setLoading', false);
    this.$store.commit('images/setTotalCount', 0);
  },
  mounted: function () {
    this.username = this.$route.params.username ?? 'siovene';
    this.$store.dispatch('user/getUserByName', this.username)
    this.$store.dispatch('images/fetchImages', { formData: {type: 'user', term: this.username}, offset: 0, limit: 20 })
  },
  computed: {
    ...mapState({ user: state => state.user}),
    ...mapState({ images: state => state.images }),
    ...mapGetters({
      sortedImages: 'images/sortedImages'
    }),

    userData () {
      return this.user.data;
    },
    totalCount() {
      return this.images.totalCount;
    },
    countItems() {
      return this.images.images.length;
    },
    isLoading() {
      return this.isLoading
    }
  },
  methods: {
    moreItems() {

    }
  },
  watch: {
    selectedSort: 'updateSortingCriteria'
  }
}
</script>

<style scoped>

</style>