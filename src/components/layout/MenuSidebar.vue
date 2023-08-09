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
        <template v-for="menuItem in processedMenu(menuArea.items, allRoutes)" v-bind:key="menuItem.key">
          <v-list-item
            density="compact"
            :color="this.$store.state.customizedTheme.sideBarTextColor"
            :to="menuItem.path"
            link
          >
            <template v-slot:prepend>
              <v-icon :icon="menuItem.icon || 'mdi-circle-medium'"></v-icon>
            </template>
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
  props: {
    menu: {
      type: Array,
      default: null
    },
    allRoutes: {
      type: Array
    }
  },
  computed: {
    processedMenu() {
      return this.buildMenu;
    }
  },
  methods: {
    buildMenu: (items, allRoutes) => {
      return items.map(route => {
        let routeName = route.routeName;
        const routeItem = allRoutes.filter(route => route.name === routeName)[0];
        // let paramKey = routeItem.meta.defaultParamKey;
        let path = (routeItem.meta.defaultParamValue) ? { name: routeName, params: { 'username': routeItem.meta.defaultParamValue } } : routeItem.path;
        return {
          key: routeItem.meta.key,
          icon: routeItem.meta.icon,
          path: path,
          text: routeItem.meta.text
        };
      })
    }
  }
}
</script>