<template>
  <v-breadcrumbs
    class="ml-n3 text-body-2"
    :items="items"
  >
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
  <v-divider></v-divider>
</template>

<script>

export default {
  name: "BreadCrumb",
  data() {
    return {
      items: ['Home', 'Page']
    }
  }
}
</script>

<style scoped>

</style>