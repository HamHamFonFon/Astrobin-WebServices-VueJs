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

    <v-divider></v-divider>
    <div>
      <h3 class="text-h5 mt-5">Last 10 images of the day</h3>
    </div>

<!--    <masonry-wall-->
<!--      :items="sortedTodayImage"-->
<!--      :min-columns="3"-->
<!--      :max-column="6"-->
<!--      :ssr-columns="1"-->
<!--      :column-width="300"-->
<!--      :gap="5"-->
<!--    >-->
<!--      <template #default="{ item, index }">-->
<!--        <v-card-->
<!--          color="grey-lighten-1"-->
<!--          :class="['ma-4']"-->
<!--          :data-index="index"-->
<!--        >-->
<!--          <v-img-->
<!--            v-if="item.image"-->
<!--            cover-->
<!--            :src="item.image"-->
<!--          >-->
<!--            <div class="d-flex fill-height align-center justify-center">-->
<!--              <div class="text-h4 text-white">{{ item.date }}-->
<!--                <div class="text-h6 text-white">{{ item.title }}</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </v-img>-->
<!--          <v-card-title v-else>-->
<!--            <div class="text-h4 text-white">{{ item.date }}-->
<!--              <div class="text-h6 text-white">{{ item.title }}</div>-->
<!--            </div>-->
<!--          </v-card-title>-->
<!--        </v-card>-->
<!--      </template>-->
<!--    </masonry-wall>-->
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