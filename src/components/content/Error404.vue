<template>
  <v-container class="fill-height d-flex align-center justify-center">
      <v-card
          color="transparent"
          elevation="0"
          max-width="800"
          class="mx-auto"
      >
        <h1
            class="font-weight-black text-h3 text-lg-h2 text-xl-h1 text-secondary"
        >
          404 Error
        </h1>
        <h2 class="text-h6 text-secondary mt-4 mx-auto align-center">
          It seems you fall in a black hole
        </h2>
        <v-spacer></v-spacer>
        <v-card-actions class="justify-center">
          <router-link to="/">
            <v-btn  aria-label="Home" size="large" variant="outlined" class="text-secondary justify-center"> Home </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>

export default {
  name: "404Component"
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>