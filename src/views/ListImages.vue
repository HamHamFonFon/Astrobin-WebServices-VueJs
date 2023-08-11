<template>
  <v-container>
    <v-card class="d-flex pt-4 px-4 mb-3">
      <v-form
        validate-on="submit"
        @submit.prevent="submitForm"
        style="width: 100%; margin: 1em; display: flex"
      >
        <v-select
          label="Filtering by..."
          v-model="formData.type"
          :items="items"
          item-value="key"
          item-title="value"
          variant="outlined"
          required
          clearable
        ></v-select>

        <v-text-field
          type="search"
          label="Search terms"
          v-model="formData.term"
          variant="outlined"
          required
          clearable
        >
        </v-text-field>

        <v-btn type="submit" x-large variant="outlined"> Search </v-btn>
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
      </v-form>
    </v-card>

    <v-spacer></v-spacer>

    <transition name="fade">
      <v-card class="d-flex pt-4 px-4 mb-3" v-if="!isLoading && 0 < totalCount">

        <div v-if="totalCount">
          <h5 class="text-h5 mt-5">{{ totalCount }} images</h5>
        </div>
        <v-spacer></v-spacer>

        <AstrobinListImages :images="sortedImages" :columns="3" :gap="0">
          <template v-slot="{ image, index }">
            <v-card class="ma-3" :data-index="index">
              <router-link :to="{ name: 'image', params: { astrobinId: image.astrobin_id } }">
                <v-img
                    :src="image.urlRegular"
                    :lazy-src="image.urlGallery"
                    cover
                    class="bg-grey-lighten-2"
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
                <v-card-subtitle class="pt-4">
                  <router-link :to="{name: 'user', params: { username : image.user }}">{{ image.user }}</router-link> -  {{ image.date }}
                </v-card-subtitle>
              </router-link>
            </v-card>
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
      </v-card>
    </transition>

    <transition name="fade">
      <Message></Message>
    </transition>
  </v-container>
</template>

<script>

import {mapGetters, mapState} from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinListImages from "@/components/astrobin/AstrobinListImages.vue";

export default {
  name: "ListImages",
  components: {
    Message,
    AstrobinListImages
  },
  created() {
    this.$store.commit('message/setLoading', false);
    this.$store.commit('images/setTotalCount', 0);
  },
  mounted: function () {
    this.offset = 20;
  },
  data() {
    return {
      pageTitle: 'search Astrobin Images',
      items: [
        {key: 'title__icontains', value: 'Title contains...'},
        {key: 'user', value: 'Images from user...'},
        {key: 'description__icontains', value: 'Description contains...'},
        {key: 'subjects', value: 'Subjects'},
      ],
      sortResults: [
        {key: 'likes', value: 'Most liked'},
        {key: 'views', value: 'Most viewed'},
        {key: 'uploaded_most', value: 'Most recent'},
        {key: 'uploaded_old', value: 'Less recent'},
        {key: 'title', value: 'Title'}
      ],
      formData: {
        type: '',
        term: ''
      },
      selectedSort: ''
    }
  },
  computed: {
    ...mapGetters({
      sortedImages: 'images/sortedImages'
    }),
    ...mapState(
        { images: state => state.images }
    ),
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
      return this.loading;
    }
  },
  methods: {
    async submitForm () {
      this.$store.dispatch('images/fetchImages', { formData: this.formData, offset: 0, limit: 20 });
    },
    async moreItems () {
      this.$store.dispatch('images/fetchImages', { formData: this.formData, offset: (this.currentOffset+20), limit: 20 });
    },
    updateSortingCriteria () {
      this.$store.commit('images/setSortCriteria', this.selectedSort);
    }
  },
  watch: {
    selectedSort: 'updateSortingCriteria'
  }
}
</script>

<style scoped>
</style>