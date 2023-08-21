<template>
  <v-sheet
    elevation="0"
    class="mx-auto"
  >
    <v-container>
      <v-card class="pt-4 px-4 mb-3">
        <v-form
            validate-on="submit"
            @submit.prevent="submitForm"
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
          <v-btn type="submit" class="ml-2" variant="elevated"> Search </v-btn>
        </v-form>
      </v-card>
    </v-container>
    <transition name="fade">
      <div v-if="!isLoading && 0 < totalCount">
        <v-container>
          <v-card class="d-flex pt-4 px-4 mb-3" >
            <h5 v-if="totalCount" class="text-h6 mt-5">Results: {{ totalCount }} images</h5>
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

          <AstrobinListImages :images="sortedImages" :columns="4" :gap="0">
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

                    <v-card-actions>
                      <v-list-item class="w-100">
                        <template v-slot:prepend>
                          <router-link :to="{name: 'user', params: { username : image.user }}">
                            <v-icon color="surface-variant" icon="mdi-account" />{{ image.user }}
                          </router-link>
                        </template>
                        <template v-slot:append>
                          <div class="justify-self-end">
                            <v-icon icon="mdi-eye" color="surface-variant"></v-icon> <span class="subheading me-2">{{ image.views }}</span>
                            <v-icon icon="mdi-heart" color="surface-variant"></v-icon> <span class="subheading me-2">{{ image.likes }}</span>
                          </div>
                        </template>
                      </v-list-item>

                    </v-card-actions>
                  </router-link>
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
        </v-container>

      </div>
    </transition>

    <transition name="fade">
      <Message></Message>
    </transition>
  </v-sheet>
</template>

<script>

import {mapGetters, mapState} from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinListImages from "@/components/astrobin/AstrobinListImages.vue";

import sortingResults from "@/configs/sortingResults";

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
      sortResults: sortingResults,
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
.v-card-title {
  background-color: rgba(0, 0, 0, 0.5);
}
a {
  text-decoration: none;
  color: inherit;
}
</style>