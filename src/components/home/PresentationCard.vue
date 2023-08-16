<template>
  <v-sheet
    elevation="0"
    class="mx-auto"
    color="#1B2A32"
    rounded
    :style="backgroundStyle"
  >
    <v-container class="text-center">
      <v-sheet color="transparent" elevation="0">
        <img class="mx-auto" width="200" src="@/assets/images/astro_otter_200-200.png" alt="Astro-Otter logo" style="border-radius: 50%" />
        <v-card
            color="transparent"
            elevation="0"
            max-width="800"
            class="mx-auto my-10 py-0py-md-12"
        >
          <h1
            :style="{color: this.$store.state.customizedTheme.textColorGrey }"
            class="font-weight-black text-h3 text-lg-h2 text-xl-h1"
          >
            Welcome to astrobin API
          </h1>
          <h2 class="text-h6 text-secondary mt-4 mx-auto">
            Discover wonders and mysteries of the universe
          </h2>
        </v-card>
        <div class="text-center mb-10">
          <v-btn
              size="x-large"
              class="text-white"
              :color="this.$store.state.customizedTheme.sideBarColor"
              to="/home#pages"
          >Explore</v-btn
          >
        </div>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script>
import {computed} from "vue";
import backgroundImage from "@/assets/images/bg-1.jpg";

export default {
  name: "PresentationCard",
  setup() {
    const backgroundStyle = computed(() => ({
      backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh'
    }));

    return {
      backgroundStyle
    };
  }
}
</script>

<style scoped>

</style>