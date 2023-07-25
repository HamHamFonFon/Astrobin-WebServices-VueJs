<template>
  <v-container
    fluid
  >
    <v-sheet class="mx-auto">
      <v-form
        validate-on="submit"
        @submit.prevent="submitForm"
        inline
      >
        <v-container fluid>
          <v-row>
            <v-col
                cols="5"
                md="6"
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
            </v-col>
            <v-col
              cols="5"
              md="6"
            >
              <v-text-field
                label="Search terms"
                v-model="formData.term"
                variant="outlined"
                required
                clearable
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="2"
              md="2"
            >
              <v-btn type="submit" x-large variant="outlined"> Search </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-sheet>

    <v-sheet class="mx-auto">
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
    </v-sheet>

    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-spacer></v-spacer>

    <transition name="fade">
      <AstrobinListImages v-if="!isLoading && 0 < totalCount" :images="sortedImages" :totalCount="totalCount"></AstrobinListImages>
    </transition>

    <transition name="fade">
      <Message></Message>
    </transition>

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