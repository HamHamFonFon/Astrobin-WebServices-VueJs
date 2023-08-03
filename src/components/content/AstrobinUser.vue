<template>
  <v-title>{{ user.username }}</v-title>
  <v-avatar v-if="null !== user.avatar" :image="user.avatar"></v-avatar>
</template>

<script>
export default {
  name: "AstrobinUser",
  props: {
      user: {
        type: Object
      }
  }
}
</script>

<style scoped>

</style>