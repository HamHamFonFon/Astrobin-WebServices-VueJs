<template>
</template>

<script>


export default {
  name: 'AstrobinImageCard',
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