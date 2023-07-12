<template>
  <div id="today">
    <h2>{{ today.date }}</h2>

    <router-link :to="{ name: 'image', params: { astrobinId: today.astrobinImageId } }">
      <img :src="today.image.urlHd" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AstrobinToday",
  props: {
    today: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>