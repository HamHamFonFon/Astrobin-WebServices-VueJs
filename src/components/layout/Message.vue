<template>
  <v-alert
    :type="type"
    border="start"
    variant="outlined"
    prominent
    closable
  >
    {{ msgError }}
  </v-alert>
</template>

<script>
import imgLoading from '@/assets/images/loading.gif'

export default {
  name: 'ErrorMessage',
  data () {
    return {
      imgLoading: imgLoading,
      show: this.$store.state.message['show'],
      httpCode: this.$store.state.message['httpCode'],
      type: this.$store.state.message['type'],
      title: this.$store.state.message['type'],
      msgError: this.$store.state.message['message']
    }
  }
}
</script>