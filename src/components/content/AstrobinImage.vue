<template>

  <v-parallax
    :src="isHovering ? image.urlHdSolution : image.urlHd"
    @mouseover="isHovering = true" @mouseout="isHovering = false"
    cover
  >
    <v-row class="w-auto fill-height" align="center" justify="center">
      <div class="text-h2 text-white">
        <div class="text-h4 text-white">{{ image.title }}</div>
      </div>
    </v-row>
  </v-parallax>

  <div class="d-flex pa-5">
    <v-row class="flex-0" dense>
      <v-col cols="12" xl="4">
        <v-card class="card-shadow">
          <v-card-title>
            <v-icon icon="mdi-information-outline" class="mr-2" left></v-icon>
            Informations
          </v-card-title>
          <v-list-item
              v-for="(item, i) in listItems"
              :key="i"
              :value="item"
              color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title justify>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            {{ image.description }}
          </v-card-text>

          <v-card-item>
            <div class="image__chips" v-if="0 < image.subjects.length">
              <v-chip-group>
                <v-chip v-for="chip in image.subjects" :key="chip">{{ chip }}</v-chip>
              </v-chip-group>
            </div>
          </v-card-item>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn @click="astrobinPageUrl">Visit Astrobin page</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" xl="4" v-if="image.urlSkyplot">
        <v-card class="card-shadow">
          <v-card-title>
            <v-icon icon="mdi-telescope" class="mr-2" left></v-icon>
            Skyplot
          </v-card-title>
          <v-img :src="image.urlSkyplotAdvanced ? image.urlSkyplotAdvanced : image.urlSkyplot" cover></v-img>
          <v-list-item
              v-for="(item, i) in acquisition"
              :key="i"
              :value="item"
              color="primary"
          >
            <v-list-item-title justify>
              {{ item.key }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" xl="4" v-if="image.urlHistogram">
        <v-card class="card-shadow h-full" height="420">
          <v-card-title>
            <v-icon icon="mdi-chart-line" class="mr-2" left></v-icon>
            Histogram
          </v-card-title>
          <v-img :src="image.urlHistogram" cover></v-img>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AstrobinImage",
  data () {
    return {
      show: false,
      isHovering: false,
      listItems: [
        { text: this.image.user, icon: 'mdi-account', link: true},
        { text: this.image.likes, icon: 'mdi-heart'},
        { text: this.image.views, icon: 'mdi-eye'},
        { text: this.image.uploaded, icon: 'mdi-clock'},
      ],
      acquisition: [
        { text: this.image.ra, key: 'RA'},
        { text: this.image.dec, key: 'Dec'},
        { text: this.image.scale, key: 'Pixel scale'},
        { text: this.image.orientation, key: 'Orientation'},
        { text: this.image.radius, key: 'Field radius'},
      ]
    }
  },
  props: {
    image: {
      default: null,
      type: Object
    }
  },
  methods: {
    astrobinPageUrl() {
      let astrobinUrl = 'https://www.astrobin.com/' + this.image.astrobin_id + '/';
      window.open(astrobinUrl, '_blank');
    }

  }
}
</script>
