<template>
  <v-navigation-drawer
    border="non"
    elevation="1"
    id="mainMenu"
    color="#283E4B"
  >
    <!-- TOP AREA -->
    <template v-slot:prepend>
      <v-card
          style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px"
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
    <MenuSidebar />

    <!-- BOTTOM AREA -->
    <template v-slot:append>
      <v-card
          theme="dark"
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
                color="white"
                :class="`text-grey`"
                icon
            >
              <Icon width="30" icon="line-md:github-loop" />
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


    <!-- Show/Hide -->
    <v-list-item
      prepend-icon="mdi-chevron-right"
      @click="rail = false"
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <!-- HOME -->
    <v-divider></v-divider>
    <v-list-item
      prepend-icon="mdi-home"
      title="Homepage"
      value="Homepage"
      to="/"
      light
    >
    </v-list-item>
    <v-divider></v-divider>

    <!-- Page -->
    <v-list density="compact" color="white" nav >
      <v-list-item
        v-for="route in routerLinks" :key="route.path"
        :prepend-icon="route.icon"
        :title="route.label"
        :value="route.name"
        :to="route.path"
        light
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import MenuSidebar from "@/components/layout/MenuSidebar.vue";

export default {
  name: "LeftSidebar",
  components: {MenuSidebar},
  methods: {
    openGithubSite() {
      window.open('https://github.com/HamHamFonFon/', '_blank')
    }
  }
}
</script>
