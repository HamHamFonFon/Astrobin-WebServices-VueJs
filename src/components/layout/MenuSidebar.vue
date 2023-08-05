<template>
  <v-list
    class="menu-list"
    nav
    dense
  >
    <template
      v-for="menuArea in this.menu" v-bind:key="menuArea.key"
    >
      <div class="pa-1 mt-2 text-overline" :color="this.$store.state.customizedTheme.sideBarTextColor">
        {{ menuArea.text}}
      </div>
      <template v-if="menuArea.items">
        <template
          v-for="menuItem in menuArea.items"
          v-bind:key="menuItem.key"
        >
          <v-list-item
            :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
            density="compact"
            :to="getPath(menuItem.routeName)"
            :color="this.$store.state.customizedTheme.sideBarTextColor"
          >
            <v-list-item-title v-text="menuItem.text"></v-list-item-title>
          </v-list-item>
        </template>
      </template>
    </template>
  </v-list>
</template>

<script>

export default {
  name: "MenuSidebar",
  data() {
    return {
      routerLinks: [],
    }
  },
  props: {
    menu: {
      type: Array,
      default: null
    }
  },
  created() {
    this.routerLinks = this.$router.options.routes
  },
  methods: {
    getPath (routeName) {
      return this.routerLinks.filter(route => route.name === routeName)[0].path;
    }
  }
}
</script>