<template>
  <v-container class="bg-surface-variant">
    <v-row left="space-around">
      <v-card>
        <v-toolbar
          color="rgba(0, 0, 0, 0)"
          theme="dark"
        >
          <v-toolbar-title class="text-h6">
            Astrobin image
          </v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col cols="3">
              <h3>Filtrer</h3>
              <v-divider></v-divider>
              <v-text-field
                  clearable
                  label="AstrobinId"
                  placeholder="Change astrobinId"
                  variant="outlined"
              ></v-text-field>
              <v-btn
                @click="updateAstrobinId"
              >Update</v-btn>
            </v-col>
            <v-col cols="9">
              <ErrorMessage />
              <AstrobinImage :astrobinId="astrobinId"></AstrobinImage>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AstrobinImage from "@/components/astrobin/AstrobinImage.vue"
import ErrorMessage from "@/components/layout/Error.vue";

export default {
  name: "PageImage",
  components: {
    AstrobinImage,
    ErrorMessage
  },
  data () {
    return {
      astrobinId: 'ybdrt3'
    }
  },
  methods: {
    updateAstrobinId(value) {
      alert(value);
    }
  }
}
</script>

<style scoped>

</style>