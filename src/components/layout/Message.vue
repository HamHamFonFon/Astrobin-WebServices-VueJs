<template>
  <v-alert
    v-if="isLoading"
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
      loading: state => state.message.loading
    }),
    computedMsg() {
      return this.msgError;
    },
    computedType() {
      return this.type
    },
    isLoading() {
      return this.loading
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