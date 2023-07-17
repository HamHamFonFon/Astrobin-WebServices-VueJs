<template>
  <div class="card">
    <div class="card__product-img">
      <img
        class="card__img"
        alt="product-image"
        :src="img"
        max-width="400"
      >
    </div>
    <div class="card__content">
      <p class="card__name">{{ title }} <span v-if="id">#{{ id }}</span></p>
      <p class="card__description" v-if="description">{{ description }}</p>
    </div>
    <div class="card__footer">
      <p class="card__autor"><span class="card__autor--alt-color">{{ autor }}</span></p>
    </div>
  </div>
</template>

<script>

import IconView from '@/assets/svg/icon-view.svg'

export default {
  name: 'AstrobinImageCard',
  data() {
    return {
      iconView: IconView
    }
  },
  props: {
    img: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    id: {
      type: [String, Number],
      default: null
    },
    autor: {
      type: String,
      default: ''
    }
  },
}
</script>