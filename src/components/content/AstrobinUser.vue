<template>

  <v-card class="text-left mx-auto d-flex">
    <div style="width: 200px">
      <v-img height="100%" cover :src="user.avatar ? user.avatar : 'https://img.freepik.com/free-icon/man_318-677829.jpg'" alt="alt" />
    </div>

    <div class="info flex-fill pa-10">
      <h6 class="text-h6">{{ user.username }}</h6>
      <div class="text-body-1 text-blue-grey" id="about"></div>
      <v-list-item
          v-for="(item, i) in listDataUser"
          :key="i"
          :value="item"
          color="primary"
      >
        <template v-slot:prepend>
          <v-icon v-if="item.text" :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-if="item.text" justify>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AstrobinUser",
  data () {
    return {
      listDataUser: [
        { text: this.user.language, icon: 'mdi-flag'},
        { text: this.user.job, icon: 'mdi-briefcase-outline'},
        { text: this.user.website, icon: 'mdi-web'},
      ]
    }
  },
  props: {
      user: {
        type: Object
      }
  },
  mounted() {
    this.convertAbout();
  },
  methods: {
    convertAbout() {
      let divAbout = document.getElementById('about');
      divAbout.innerHTML = this.user.about;
    }
  }
}
</script>

<style scoped>

</style>