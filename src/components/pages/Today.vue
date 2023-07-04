<template>
  <v-container class="bg-surface-variant">
    <v-row left="space-around">
      <v-card>
        <v-toolbar
            color="rgba(0, 0, 0, 0)"
            theme="dark"
        >
          <v-toolbar-title class="text-h6">
            Image of the day
          </v-toolbar-title>
          <v-card-subtitle>
            Display image of the day
          </v-card-subtitle>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col>
              <ErrorMessage />
              <AstrobinToday></AstrobinToday>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import ErrorMessage from "@/components/layout/Error.vue";
  import AstrobinToday from "@/components/astrobin/AstrobinToday.vue";
  export default {
    name: 'PageToday',
    components: {
      ErrorMessage,
      AstrobinToday
    }
  }
</script>