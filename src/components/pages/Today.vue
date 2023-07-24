<template>
  <v-container fluid>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6">
        Image of the day
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <transition name="fade">
      <Message />
    </transition>
    <transition name="fade">
      <AstrobinToday v-if="!isLoading" :today="today"></AstrobinToday>
    </transition>

    <v-divider></v-divider>
    <div>Last 10 images of the day</div>

    <v-sheet
      class="mx-auto"
      elevation="8"
    >
      <v-slide-group
        v-model="model"
        class="pa-8"
        selected-class="bg-primary"
        show-arrows
        center-active
      >
        <v-slide-group-item
            v-for="(todaySlideImage, n) in sortedTodayImage"
            :key="n"
            v-slot="{ selectedClass }"
        >
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            max-height="500"
          >
            <v-img
              cover
              :src="todaySlideImage.image"
            >
              <div class="d-flex fill-height align-center justify-center">
                <div class="text-h4 text-white">{{ todaySlideImage.date }}
                  <div class="text-h6 text-white">{{ todaySlideImage.title }}</div>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Message from "@/components/layout/Message.vue";
import AstrobinToday from "@/components/astrobin/AstrobinToday.vue";

export default {
  name: 'PageToday',
  components: {
    Message,
    AstrobinToday
  },
  mounted() {
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