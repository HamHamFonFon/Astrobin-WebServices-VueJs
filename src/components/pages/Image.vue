<template>
  <v-container class="bg-surface-variant" style="width: 100%;">
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
             <div class="d-flex">
               <v-text-field label="AstrobinId" placeholder="Change astrobinId" class="pt-5 mr-2" variant="outlined" clearable v-model="newAstrobinId"></v-text-field>
               <v-btn x-large variant="outlined" @click="updateAstrobinId"> CHANGE </v-btn>
             </div>
             <v-divider></v-divider>

           </v-col>
         </v-row>
          <v-row>
            <v-col>
              <div>
                <transition>
                  <Message v-if="show" />
                </transition>
                <transition>
                  <AstrobinImage v-if="!show" :image="image"></AstrobinImage>
                </transition>

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
  data () {
    return {
      newAstrobinId: null
    }
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
    updateAstrobinId() {
      console.log(this.newAstrobinId)
      this.$store.dispatch("images/fetchImageById", this.newAstrobinId);
    }
  }
}
</script>

<style scoped>

</style>