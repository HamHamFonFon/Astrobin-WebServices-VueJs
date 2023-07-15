<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>Search Astrobin Images by...</v-toolbar-title>
    </v-toolbar>

    <v-sheet class="mx-auto">
      <v-form
        @submit.prevent="submitForm"
        inline
      >
        <v-select
          label="Select"
          v-model="formData.type"
          :items="items"
          item-value="key"
          item-title="value"
          variant="outlined"
          required
          clearable
        ></v-select>
        <v-text-field
          v-model="formData.term"
          variant="outlined"
          required
          clearable
        >
        </v-text-field>

        <v-btn type="submit" x-large variant="outlined"> Search </v-btn>
      </v-form>

    </v-sheet>
    <v-divider></v-divider>
    <transition name="fade">
      <Message></Message>
    </transition>

    <transition-group name="fade" tag="div" class="images">
      <p>{{ totalCount }}</p>
      <div v-if="!isLoading && 0 < totalCount">
        <span v-for="(image, index) in listImages" :key="index"> {{ image.title }}</span>
        <btn
        >
          More
        </btn>
      </div>

    </transition-group>

  </v-container>
</template>

<script>

import Message from "@/components/layout/Message.vue";
import {mapState} from "vuex";

export default {
  name: "ListImages",
  components: {
    Message
  },
  mounted: function () {
    this.images = null;
    this.totalCount = 0
  },
  data() {
    return {
      items: [
        {key: 'subjects', value: 'Subjects'},
        {key: 'user', value: 'User'},
        {key: 'title__icontains', value: 'Title contains...'},
        {key: 'description__icontains', value: 'Description contains...'}
      ],
      formData: {
        type: '',
        term: ''
      }
    }
  },
  computed: {
    ...mapState(
        { loading: state => state.message.loading },
        { images: state => state.images.images },
        { totalCount: state => state.images.totalCount }
    ),
    isLoading() {
      return this.loading;
    },
    totalCount() {
      return this.totalCount;
    },
    listImages() {
      return this.images;
    }
  },
  methods: {
    async submitForm () {
      this.$store.dispatch('images/fetchImages', { formData: this.formData, offset: 0, limit: 20 });
    }
  }
}
</script>

<style scoped>

</style>