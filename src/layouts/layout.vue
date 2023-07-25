<template v-slot:activator>
  <v-app>
    <v-navigation-drawer
        width="250"
        class="blue-grey darken-4"
        dark
        persistent
        :mini-variant="miniVariant"
        v-model="drawer"
        fixed
        app
    >
      <v-toolbar flat class="transparent" dense>
        <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
          <v-list-tile>
            <v-list-tile-action v-if="!miniVariant">
              <v-icon large color="orange">invert_colors</v-icon>
            </v-list-tile-action>
            <v-list-tile-content v-if="!miniVariant">
              <v-list-tile-title>
                <h2 v-text="appName"></h2>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon :icon="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-tooltip right :disabled="!miniVariant">
        <v-toolbar flat class="transparent" dense> <!-- slot="activator" -->
          <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
            <v-list-tile to="/" exact>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Project Overview</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <span>Project Overview</span>
      </v-tooltip>
      <v-divider></v-divider>

      <v-list subheader :class="{'list-border-bottom' : miniVariant}">
        <v-subheader>ANALYTICS</v-subheader>
        <template v-for="(item, i) in analyticsItems" v-bind:key="i">
          <v-tooltip right :disabled="!miniVariant">
            <v-list-tile
                :key="item.icon"
                :to="item.link"
                exact
            > <!-- slot="activator" -->
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <span v-text="item.title"></span>
          </v-tooltip>
        </template>
      </v-list>
      <v-divider></v-divider>
      <!--<v-divider></v-divider>-->
    </v-navigation-drawer>

    <v-toolbar
        app
        flat
        dense
        dark
    >
      <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          class="hidden-lg-and-up"
          :class="searching ? 'hidden-xs-only' : ''"
      />

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        fixed
        app
    >
      <v-toolbar flat prominent dark class="primary">
        <v-toolbar-title>Notifications</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="rightDrawer = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list subheader dense>
        <v-subheader>All notifications</v-subheader>
        <v-list-tile @click="alert(122)">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            12 new users registered
          </v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="alert(131)">
          <v-list-tile-action>
            <v-icon>data_usage</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            DB overloaded 80%
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'VuebaseLayout',

  data() {
    return {
      appName: process.env.VUE_APP_APP_NAME,
      drawer: true,
      fixed: false,
      analyticsItems: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          link: '/dashboard/indicators'
        },
        {
          icon: 'event',
          title: 'Events',
          link: ''
        },
        {
          icon: 'comment',
          title: 'Notifications',
          link: ''
        }
      ],
      developItems: [
        {
          icon: 'supervisor_account',
          title: 'Authentification',
          link: ''
        },
        {
          icon: 'storage',
          title: 'Database',
          link: ''
        },
        {
          icon: 'perm_media',
          title: 'Storage',
          link: ''
        },
        {
          icon: 'public',
          title: 'Hosting',
          link: ''
        },
        {
          icon: 'functions',
          title: 'Functions',
          link: ''
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      tabs: null,
      tabsItems: [
        {
          id: 1,
          title: 'Indicators',
          link: 'indicators'
        },
        {
          id: 2,
          title: 'Backup',
          link: 'backup'
        },
        {
          id: 3,
          title: 'Logs',
          link: 'logs'
        }
      ],
      menuItems: ['Vue', 'NodeJS', 'Laravel'],
      searching: false,
      search: ''
    }
  },

  methods: {
    onBlur() {
      this.searching = false
      this.search = ''
    },
  }
}
</script>

<style>

.bottom-menu {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.list-border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
</style>