<template>
  <v-alert
    v-if="isShow"
    :type="computedType"
    border="start"
    variant="outlined"
    prominent
    closable
  >
    <div class="msgInformation">
      <img :src="imgLoading" v-if="'warning' === computedType" style="width: 32px;" >
      <span>{{ computedMsg }}</span>
    </div>

  </v-alert>
</template>

<script>

import { mapState } from "vuex";
import imgLoading from '@/assets/images/loading.gif'

export default {
  name: 'ErrorMessage',
  data () {
    return {
      imgLoading: imgLoading
    }
  },
  computed: {
    ...mapState({
      msgError: state => state.message.message,
      type: state => state.message.type,
      show: state => state.message.show
    }),
    computedMsg() {
      return this.msgError;
    },
    computedType() {
      return this.type
    },
    isShow() {
      return this.show
    }
  }
}
</script>

<style>
.msgInformation {
  display: flex;
  align-items: center;
  padding: 0 0.2em;
}
</style>