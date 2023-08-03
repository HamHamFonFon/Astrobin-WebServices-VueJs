<template>
  <v-container fluid>
    <transition name="fade">
      <Message />
    </transition>
    <transition name="fade">
      <AstrobinToday v-if="!isLoading" :today="today"></AstrobinToday>
    </transition>

    <v-divider></v-divider>
    <div>
      <h3>Last 10 images of the day</h3>
    </div>

    <masonry-wall
      :items="sortedTodayImage"
      :min-columns="3"
      :max-column="6"
      :ssr-columns="1"
      :column-width="300"
      :gap="5"
    >
      <MasonryCard :item="item" />
    </masonry-wall>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinToday from "@/components/content/AstrobinToday.vue";
import MasonryCard from "@/components/astrobin/MasonryCard.vue";

export default {
  name: 'PageToday',
  components: {
    MasonryCard,
    Message,
    AstrobinToday
  },
  data() {
    return {
      pageTitle: 'Image of the day'
    }
  },
  created() {
    this.$emit('updatePageTitle', this.pageTitle);
  },
  mounted() {
    this.$emit('updatePageTitle', this.pageTitle);
    this.$store.dispatch('today/fetchImageOfTheDay');
    this.$store.dispatch('today/fetchListImagesOfTheDay')
  },
  computed: {
    ...mapState(
      { today: state => state.today }
    ),
    ...mapGetters({
        sortedTodayImage: 'today/sortedTodayImages'
    }),
    isLoading() {
      return this.isLoading
    }
  }
}
</script>