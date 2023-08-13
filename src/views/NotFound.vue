<template>
  <div :style="backgroundStyle" class="background">
    <Error404 />
  </div>
</template>

<script>
import { computed } from "vue";
import Error404 from "@/components/content/Error404.vue";
import backgroundImage from '@/assets/images/black_hole.png'

export default {
  name: "NotFound",
  components: {
    Error404
  },
  setup() {
    const backgroundStyle = computed(() => ({
      backgroundImage: `url(${backgroundImage})`,
    }));

    return {
      backgroundStyle
    };
  }
}
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>