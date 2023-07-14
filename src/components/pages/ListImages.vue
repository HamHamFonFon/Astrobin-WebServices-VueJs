<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>Search Astrobin Images by...</v-toolbar-title>
    </v-toolbar>

    <div class="msgInformation">
      <v-select
        v-model="selectedFilter"
        label="Select"
        :items="items"
        item-value="key"
        item-title="value"
        variant="outlined"
      ></v-select>
      <v-text-field
        variant="outlined" clearable
      >
      </v-text-field>
      <v-btn x-large variant="outlined"> Search </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ListImages",
  data() {
    return {
      items: [
        {key: 'subjects', value: 'Subjects'},
        {key: 'user', value: 'User'},
        {key: 'title__icontains', value: 'Title contains...'},
        {key: 'description__icontains', value: 'Description contains...'}
      ]
    }
  }
}
</script>

<style scoped>

</style>