<template>
  <v-container class="h-full">

    <v-card class="d-flex pt-4 px-4 mb-3">
      <v-text-field
          type="search"
          label="Username"
          placeholder="Search images from user..."
          variant="outlined"
          clearable
          v-model="newAstrobinUser"
          append-inner-icon="mdi-magnify"
          @click:append-inner="updateAstrobinUser"
          @keydown.enter="updateAstrobinUser"
      ></v-text-field>
    </v-card>
    <v-spacer></v-spacer>
    <v-divider></v-divider>

    <transition name="fade">
      <Message />
    </transition>

    <transition name="fade">
      <div v-if="!isLoading ">

        <div class="d-flex pa-5">
          <v-row class="flex-0" dense>
            <v-col cols="12" xl="4">
              <AstrobinUser :user="userData" />
            </v-col>
            <v-col cols="12" xl="8">
              <v-card class="pt-4 px-4 mb-3 card-shadow">
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
              </v-card>
            </v-col>
          </v-row>
        </div>


        <AstrobinListImages  v-if="0 < totalCount" :images="sortedImages" :columns="4" :gap="0">
          <template v-slot="{ image, index }">
            <v-col :data-index="index">
              <v-card class="mx-auto" max-height="450" max-width="400">
                <router-link :to="{ name: 'image', params: { astrobinId: image.astrobin_id } }">
                  <v-img
                      :src="image.urlRegular"
                      :lazy-src="image.urlGallery"
                      class="bg-grey-lighten-2"
                      height="300"
                      cover
                  >
                    <template v-slot:placeholder>
                      <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                      >
                        <v-progress-circular
                            indeterminate
                            color="grey-lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                    <v-card-title class="text-h6 text-white">{{ image.title }}</v-card-title>
                  </v-img>
                </router-link>
                <v-card-actions>
                  <v-list-item class="w-100">
                    <template v-slot:append>
                      <div class="justify-self-end">
                        <v-icon icon="mdi-eye" color="surface-variant"></v-icon> <span class="subheading me-2">{{ image.views }}</span>
                        <v-icon icon="mdi-heart" color="surface-variant"></v-icon> <span class="subheading me-2">{{ image.likes }}</span>
                      </div>
                    </template>
                  </v-list-item>
                </v-card-actions>
              </v-card>
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
  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinUser from "@/components/content/AstrobinUser.vue";
import AstrobinListImages from "@/components/astrobin/AstrobinListImages.vue";
import sortingResults from "@/configs/sortingResults";

export default {
  name: "PageUser",
  data () {
    return {
      username: null,
      newAstrobinUser: null,
      sortResults: sortingResults,
      selectedSort: ''
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
    this.offset = 20;
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
    currentOffset() {
      return this.images.offset;
    },
    countItems() {
      return this.images.images.length;
    },
    isLoading() {
      return this.isLoading
    }
  },
  methods: {
    /**
     * Get data
     */
    updateAstrobinUser() {
      this.username = this.newAstrobinUser;
      this.$store.dispatch('user/getUserByName', this.username)
      this.$store.dispatch('images/fetchImages', { formData: {type: 'user', term: this.username}, offset: 0, limit: 20 })
    },
    /**
     * Sort images list
     */
    updateSortingCriteria () {
      this.$store.commit('images/setSortCriteria', this.selectedSort);
    },
    /**
     * More items
     */
    async moreItems() {
      this.$store.dispatch('images/fetchImages', { formData: {type: 'user', term: this.username}, offset: (this.currentOffset+20), limit: 20 });
    }
  },
  watch: {
    selectedSort: 'updateSortingCriteria'
  }
}
</script>

<style scoped>

</style>