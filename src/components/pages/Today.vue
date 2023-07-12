<template>
  <v-container>
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
  </v-container>
</template>

<script>
import { mapState} from "vuex";

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
  },
  computed: {
    ...mapState({today: state => state.today}),
    isLoading() {
      return this.isLoading
    }
  },
}
</script>