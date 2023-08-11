<template>
  <div class="image-lists" :style="{ gridTemplateColumns: getColumnStyle() }">
    <slot
      v-for="image in images"
      :image="image"
      :style="{overflow: 'hidden'}"
    >
    </slot>
  </div>
</template>

<script>

export default {
  name: "AstrobinListImages",
  props: {
    images: Object,
    gap: Number,
    columns: {
      type: Number,
      default: 3
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
.images-list {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-auto-rows: 0;
}

.image-item {
  border-radius: 5px;
  overflow: hidden;
}
</style>