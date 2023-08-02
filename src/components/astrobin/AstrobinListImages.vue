<template>
  <div>
    <span>Résults: {{ totalCount }}</span>
  </div>
  <v-spacer></v-spacer>
  <v-container>

    <div class="grid" ref="masonry">
      <div v-for="(item, index) in images" :class="getRandomClasse()" v-bind:key="index">
        <v-card>
          <router-link :to="{ name: 'image', params: { astrobinId: item.astrobin_id } }">
            <v-img
                :src="item.urlRegular"
                :lazy-src="item.urlGallery"
                cover
                class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-card-title class="text-h6 text-white d-flex flex-column">
                <p class="mt-4">{{ item.title }}</p>
              </v-card-title>
            </v-img>
          </router-link>
          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              By <router-link :to="{name: 'user', params: { username : item.user }}">{{ item.user }}</router-link>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import Masonry from 'masonry-layout'
const ITEM_CLASSES = ['grid-item--width2', 'grid-item--width3', 'grid-item--width4'];

export default {
  name: "AstrobinListImages",
  props: {
    images: Object,
    totalCount: Number
  },
  created() {
    this.layout()
  },
  updated() {
    this.layout()
  },
  methods: {
    layout() {
      this._masonry = new Masonry(this.$refs.masonry, {
        itemSelector: '.grid-item',
        columnWidth: 160,
        percentPosition: true,
      })
    },
    getRandomClasse() {
      const randomInt = (min = 1, max = ITEM_CLASSES.length) => Math.floor(Math.random() * (max - min) + min)
      return 'grid-item ' + ITEM_CLASSES[randomInt()];
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.grid {
  /*background: #eee;*/
  /*max-width: 100%;*/
}
.grid-item {
  width: 160px;
  float: left;
  border: 1px solid #a1a1a1;
  margin: 0.1em;
}

.grid-item--width2 {
  width: 240px;
}
.grid-item--width3 {
  width: 320px;
}
.grid-item--width4 {
  width: 480px;
}

/*.grid-item--height2 {*/
/*  height: 200px;*/
/*}*/
/*.grid-item--height3 {*/
/*  height: 260px;*/
/*}*/
/*.grid-item--height4 {*/
/*  height: 360px;*/
/*}*/
</style>