<template>
  <v-container>
    <h1>Image component</h1>

    <ErrorMessage />
    <AstrobinImage :astrobinId="astrobinId"></AstrobinImage>
  </v-container>


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
      astrobinId: 'ybdrt3'
    }
  }
}
</script>

<style scoped>

</style>