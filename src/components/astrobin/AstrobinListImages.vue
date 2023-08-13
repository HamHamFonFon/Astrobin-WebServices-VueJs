<template>
  <v-row class="grid" :style="{ gridTemplateColumns: this.getColumnStyle() }">
    <slot
      v-for="image in images"
      :image="image"
    >
    </slot>
  </v-row>
</template>

<script>

export default {
  name: "AstrobinListImages",
  props: {
    images: Object,
    gap: Number,
    columns: {
      type: Number,
      default: 4
    }
  },
  methods: {
    getColumnStyle() {
      return `repeat(${this.columns}, 1fr)`;
    }
  }
}
</script>

<style scoped>
:root {
  counter-reset: masonry;
}
.grid {
  display: grid;
}

.image-item {
  border-radius: 5px;
  overflow: hidden;
}
</style>