<template>
  <h2>Image component</h2>

  <ErrorMessage />
  <AstrobinImage astrobinId="{{imageId}}"></AstrobinImage>

</template>

<script>
import AstrobinImage from "@/components/astrobin/AstrobinImage.vue"
import ErrorMessage from "@/components/layout/Error.vue";

export default {
  name: "PageImage",
  components: {
    AstrobinImage,
    ErrorMessage
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