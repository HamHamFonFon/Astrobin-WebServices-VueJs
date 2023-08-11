<template>
  <v-sheet
    elevation="0"
    class="mx-auto landing-warpper"
    color="#1B2A32"
    rounded
    border="red"
  >
    <v-container class="text-center">
      <img class="mx-auto" width="200" src="@/assets/images/astro_otter_200-200.png" alt="Astro-Otter logo" style="border-radius: 50%" />
      <v-card
          color="transparent"
          elevation="0"
          max-width="800"
          class="mx-auto my-10 py-0py-md-12"
      >
        <h1
            style="color: #4a4d6d"
            class="font-weight-black text-h3 text-lg-h2 text-xl-h1"
        >
          Welcome to astrobin API
        </h1>
        <h2 class="text-h6 text-secondary mt-4 mx-auto">
          Discover wonders and mysteries of the universe
        </h2>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "PresentationCard.vue"
}
</script>

<style scoped>

</style>