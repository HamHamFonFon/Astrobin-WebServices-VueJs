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
          label="Type"
          v-model="formData.type"
          :items="items"
          item-value="key"
          item-title="value"
          variant="outlined"
          required
          clearable
        ></v-select>
        <v-text-field
          label="Term"
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

    <AstrobinListImages v-if="!isLoading && 0 < totalCount" :images="images"></AstrobinListImages>
    <v-divider></v-divider>
    <transition>
      <v-btn v-if="totalCount > countItems"> More </v-btn>
    </transition>
  </v-container>
</template>

<script>

import { mapState } from "vuex";

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
        //{ loading: state => state.message.loading },
        { images: state => state.images }
    ),
    isLoading() {
      return this.loading;
    },
    totalCount() {
      return this.images.totalCount;
    },
    countItems() {
      return this.images.length;
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