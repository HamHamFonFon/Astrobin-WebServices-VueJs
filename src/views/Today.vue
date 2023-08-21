<template>
  <v-sheet
      elevation="0"
      class="mx-auto"
    >
    <transition name="fade"><Message /></transition>
    <transition name="fade">
      <v-card>
        <AstrobinToday v-if="!isLoading" :today="today" :items="sortedTodayImage"></AstrobinToday>
      </v-card>
    </transition>
  </v-sheet>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinToday from "@/components/content/AstrobinToday.vue";

export default {
  name: 'PageToday',
  components: {
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