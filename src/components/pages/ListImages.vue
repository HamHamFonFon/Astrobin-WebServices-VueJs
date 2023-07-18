<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>Search Astrobin Images by...</v-toolbar-title>
    </v-toolbar>

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
                label="Type"
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
                label="Term"
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

    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-spacer></v-spacer>

    <AstrobinListImages v-if="!isLoading && 0 < totalCount" :images="images"></AstrobinListImages>
    <transition name="fade">
      <Message></Message>
    </transition>
    <v-spacer></v-spacer>
    <v-btn
      prepend-icon="mdi-plus"
      variant="outlined"
      v-if="totalCount > countItems"
      @click="moreItems"
    > More </v-btn>

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
    currentOffset() {
      return this.images.offset;
    },
    countItems() {
      return this.images.images.length;
    }
  },
  methods: {
    async submitForm () {
      this.$store.dispatch('images/fetchImages', { formData: this.formData, offset: 0, limit: 20 });
    },
    async moreItems () {
      this.$store.dispatch('images/fetchImages', { formData: this.formData, offset: this.currentOffset, limit: 20 });
    }
  }
}
</script>

<style scoped>
</style>