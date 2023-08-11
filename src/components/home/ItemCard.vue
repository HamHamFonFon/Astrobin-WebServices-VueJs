<template>
  <v-toolbar height="10"></v-toolbar>
  <v-sheet
      elevation="0"
      class="mx-auto landing-warpper"
      rounded
  >
    <slot
      v-for="item in items"
      :item="item"
    ></slot>
  </v-sheet>
  <v-spacer></v-spacer>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    items: {
      type: Object,
      default: null,
    }
  }
}
</script>