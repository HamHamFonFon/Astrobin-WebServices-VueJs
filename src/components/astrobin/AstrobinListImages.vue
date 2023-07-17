<template>

  <transition>
    <div>Résults: {{ images.totalCount }}</div>
  </transition>

  <v-divider></v-divider>

  <transition-group>
    <article v-for="(image, index) in images.images" :key="index" class="card">
      <router-link :to="{ name: 'image', params: { astrobinId: image.astrobinImageId } }">
        <div class="image">
          <figure>
            <img :src="image.urlRegular" :alt="image.title">
            <figcaption>{{ image.title}}</figcaption>
          </figure>
        </div>
        <div class="description">
            <span class="playcount">
              <span v-bind:style="{width: m_percentage(33) + '%'}"></span>
            </span>
          <h3 class="title" :data-id="image.astrobinId">{{ image.title }}</h3>
          <p class="artist" v-if="image.description">{{ image.description.substr(0, 50) }}</p>
          <p class="artist">{{ image.user }}</p>
        </div>
      </router-link>
    </article>
  </transition-group>
  <div>



  </div>
</template>

<script>

export default {
  name: "AstrobinListImages",
  props: {
    images: {}
  },
  methods: {
    m_percentage: function (value) {
      return parseInt((value * 100) / this.$data.maxPlayCount);
    },
  }
}
</script>

<style scoped>

</style>