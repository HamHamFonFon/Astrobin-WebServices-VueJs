<template>
  <v-container class="bg-surface-variant">
    <v-row left="space-around">
      <v-card>
        <v-toolbar
          color="rgba(0, 0, 0, 0)"
          theme="light"
        >
          <v-toolbar-title class="text-h6">
            Astrobin image
          </v-toolbar-title>
        </v-toolbar>


        <v-container>
         <v-row>
           <v-col>
             <v-divider></v-divider>
             <v-text-field
               clearable
               label="AstrobinId"
               placeholder="Change astrobinId"
               variant="outlined"
               @input="updateAstrobinId"
             ></v-text-field>
           </v-col>
         </v-row>
          <v-row>
            <v-col>
              <div>
                <transition-group>
                  <Message v-if="show" />
                  <AstrobinImage v-if="!show" :image="image"></AstrobinImage>
                </transition-group>

              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AstrobinImage from "@/components/astrobin/AstrobinImage.vue"
import Message from "@/components/layout/Message.vue";

export default {
  name: "PageImage",
  components: {
    AstrobinImage,
    Message
  },
  props: [
    'astrobinId'
  ],
  mounted() {
    this.$store.dispatch("images/fetchImageById", this.$route.params.astrobinId);
  },
  computed: {
    ...mapGetters(
        {'image': 'images/getImageById'},
        {'show': 'message/getShow'}
    ),
    image() {
      return this.$store.getters['images/getImageById'](this.$route.params.astrobinId)
    },
    show() {
      return this.$store.getters['message/getShow']
    }
  },
  methods: {
    /*updateAstrobinId(newAstrobinId) {
      console.log(newAstrobinId)
    }*/
  }
}
</script>

<style scoped>

</style>