<template>
  <v-card>
    <v-img
      :src="item.image"
      height="200px"
      cover
    >
      <v-icon
        :icon="item.icon"
        class="ma-2 icon-border"
        size="64"
      ></v-icon>
    </v-img>
    <v-divider></v-divider>
    <v-card-title class="text-h4">
      {{ item.text }}
    </v-card-title>
    <v-card-text>
      {{ item.description }}
    </v-card-text>
    <v-card-actions class="pt-0">
        <v-btn variant="text"> Click </v-btn>
    </v-card-actions>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    item: {
      type: Object,
      default: null,
    }
  }
}
</script>

<style scoped>
.icon-border {
  border: 5px solid;
  border-radius: 50%;
  padding: 0.7em;
  color: white;
}
</style>