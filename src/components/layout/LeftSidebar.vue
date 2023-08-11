<template>
  <v-navigation-drawer
    border="non"
    elevation="1"
    id="mainMenu"
    v-model="this.$store.state.customizedTheme.showSideBar"
    :color="this.$store.state.customizedTheme.sideBarColor"
  >
    <!-- TOP AREA -->
    <template
      v-if="!this.$store.state.customizedTheme.miniSidebar"
      v-slot:prepend
    >
      <v-card
        style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px; padding: 0.2em;"
        class="d-flex align-center justify-center"
      >
        <img
          width="200"
          src="@/assets/images/astro_otter_200-200.png"
          alt=""
        />
      </v-card>
    </template>

    <!-- ITEMS AREA-->
    <MenuSidebar :menu="navigation.menu" :allRoutes="allRoutes" />

    <!-- BOTTOM AREA -->
    <template
      v-if="!this.$store.state.customizedTheme.miniSidebar"
      v-slot:append
    >
      <v-card
          height="225"
          class="pa-3"
          variant="text"
          style="box-shadow: rgba(0, 0, 0, 0.05) 0px -25px 15px -20px"
      >
        <v-card
          class="d-flex flex-column gradient pa-2"
          height="200"
        >
          <v-card-title>
            <v-btn
              class="mr-2"
              size="40"
              :class="`text-grey`"
              icon
            >
              <v-icon width="30" icon="line-md:github-loop" />
            </v-btn>
            MEAUDRE Stéphane
          </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
          <v-card-text>
            <div><b>Github:</b></div>
            <div>github.com/HamHamFonFon</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="white"
              block
              prepend-icon="mdi-thumb-up-outline"
              variant="elevated"
              @click="openGithubSite"
            >
              Star-Me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </template>

  </v-navigation-drawer>
</template>

<script>
import configs from "@/configs";
import MenuSidebar from "@/components/layout/MenuSidebar.vue";

export default {
  name: "LeftSidebar",
  components: {MenuSidebar},
  data() {
    return {
      navigation: configs.navigation
    }
  },
  computed: {
    allRoutes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    openGithubSite() {
      window.open('https://github.com/HamHamFonFon/', '_blank')
    }
  }
}
</script>
