<template>
  <h2>Image component</h2>

  <AstrobinImage id="{{imageId}}"></AstrobinImage>

</template>

<script>
import AstrobinImage from "@/components/astrobin/AstrobinImage.vue"

export default {
  name: "PageImage",
  components: {
    AstrobinImage
  },
  data () {
    return {
      imageId: 'ybdrt3'
    }
  }
}
</script>

<style scoped>

</style>