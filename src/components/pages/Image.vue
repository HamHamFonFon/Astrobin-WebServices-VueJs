<template>
  <h2>Image component</h2>
  <input
      type="text"
      v-model="updateAstrobinId"
      @change="updateAstrobinImage"
      name="astrobin_id"
      placeholder="Set an astrobin id"
  />
  <AstrobinImage :id="imageId"></AstrobinImage>
</template>

<script>
import { AstrobinImage } from "@/components/astrobin/AstrobinImage.vue"
export default {
  name: "Image",
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