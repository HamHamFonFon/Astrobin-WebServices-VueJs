<template>
  <v-container class="h-full">
    <transition name="fade">
      <Message />
    </transition>
    <transition name="fade">
      <v-card>
        <AstrobinToday v-if="!isLoading" :today="today"></AstrobinToday>
      </v-card>
    </transition>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <div>
      <h5 class="text-h5 mt-5">Last 20 images of the day</h5>
    </div>

    <v-card>
      <masonry-wall
          :items="sortedTodayImage"
          :ssr-columns="1"
          :padding="30"
      >
        <template #default="{ item, index }">
          <v-card
              class="ma-3"
              :data-index="index"
          >
            <v-img
                v-if="item.image"
                :src="item.image"
                :lazy-src="item.image"
                cover
            >
              <v-card-title class="text-h6 text-white">{{ item.title }}</v-card-title>
            </v-img>
            <v-card-title v-else>
              <div class="text-h4 text-white">
                <div class="text-h6 text-white">{{ item.title }}</div>
              </div>
            </v-card-title>

            <v-card-subtitle class="pt-4">
              {{ item.date }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="primary" :to="{ name: 'image', params: { astrobinId: item.astrobinImageId } }"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </v-card>

  </v-container>
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