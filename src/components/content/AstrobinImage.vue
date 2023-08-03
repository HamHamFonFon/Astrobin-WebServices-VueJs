<template>
  <article>
    <v-card
      class="mx-auto"
    >
      <v-card-item>
        <v-container>
          <v-row no-gutters>
            <v-col cols="9">
              <v-img
                :title="image.title"
                :src="image.urlHd"
                class="align-start text-white"
                cover
              >
                <v-toolbar
                  color="rgba(0, 0, 0, 0)"
                  theme="dark"
                >
                  <v-toolbar-title class="text-h4">
                    {{ image.title }}
                  </v-toolbar-title>
                </v-toolbar>
              </v-img>
            </v-col>
            <v-col cols="3">
              <v-container>
                <v-row no-gutters v-if="image.urlSkyplot">
                  <v-col>
                    <h3>Skyplot</h3>
                    <v-img :src="image.urlSkyplot"></v-img>
                  </v-col>
                </v-row>
                <v-row no-gutters v-if="image.urlHistogram">
                  <v-col>
                    <h3>Histogram</h3>
                    <v-img :src="image.urlHistogram"></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
        <v-card-subtitle>{{ image.description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="show = !show"
          >
            More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-list-item
                v-for="(item, i) in listItems"
                :key="i"
                :value="item"
                color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>

          </div>
        </v-expand-transition>

        <v-divider></v-divider>
        <v-card-title v-if="0 < image.subjects.length">Subjects</v-card-title>
        <div class="image__chips" v-if="0 < image.subjects.length">
          <v-chip-group>
            <v-chip v-for="chip in image.subjects" :key="chip">{{ chip }}</v-chip>
          </v-chip-group>
        </div>
      </v-card-item>
    </v-card>
  </article>
</template>

<script>
export default {
  name: "AstrobinImage",
  data () {
    return {
      show: false,
      listItems: [
        { text: this.image.user, icon: 'mdi-account', link: true},
        { text: this.image.likes, icon: 'mdi-heart'},
        { text: this.image.views, icon: 'mdi-eye'},
        { text: this.image.uploaded, icon: 'mdi-clock'},
      ]
    }
  },
  props: {
    image: {
      default: null,
      type: Object
    }
  },

}
</script>
