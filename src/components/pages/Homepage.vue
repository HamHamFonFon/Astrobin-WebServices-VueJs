<template>
  <v-card-title><h1>ASTROBIN API SEEKER</h1></v-card-title>
  <v-divider></v-divider>

    <div class="pl-4 pr-4 row">
      <div class="pl-4 pr-4 row">
        <div
            class="col-md-6 col-sm-6 col-xs-12"
        >
          <v-card>
            <v-img
                :src="trophyImg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
            >
              <h1 class="text-center font-size">Image of the day</h1>
              <div class="text-center">
                <v-btn href="/shop" class="white--text " outlined>SHOP NOW</v-btn>
              </div>
            </v-img>
          </v-card>
        </div>
        <div
            class="col-md-6 col-sm-6 col-xs-12"
        >
          <v-card>
            <v-img
                :src="trophyImg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
            >
              <h1 class="text-center font-size">Top picks</h1>
              <div class="text-center">
                <v-btn  href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
              </div>
            </v-img>
          </v-card>
        </div>
      </div>
      <div class="pl-4 pr-4 row">
        <div
            class="col-md-4 col-sm-4 col-xs-12"
        >
          <v-card outlined>
            <v-img
                :src="trophyImg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
            >
              <h1 class="text-center font-size">Images</h1>
              <div class="text-center mt-2">
                <v-btn class="white--text caption"  href="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
              </div>
            </v-img>
          </v-card>
        </div>
        <div
            class="col-md-4 col-sm-4 col-xs-12"
        >
          <v-card outlined>
            <v-img
                :src="trophyImg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
            >
              <h1 class="text-center font-size">Users</h1>
              <div class="text-center mt-2">
                <v-btn class="white--text caption"  href="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
              </div>
            </v-img>
          </v-card>
        </div>

        </div>
    </div>

</template>

<script>
import trophyImg from '@/assets/images/trophy.png'
export default {
  name: "HomePage",
  data() {
    return {
      trophyImg: trophyImg
    }
  }
}
</script>

<style scoped>

</style>