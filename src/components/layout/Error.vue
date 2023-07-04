<template>
  <v-alert
    v-if="200 !== this.httpCode"
    type="error"
    icon="$error"
    density="compact"
    :title="title"
    :text="msgError"
  >
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorMessage',
  data () {
    return {
      httpCode: this.$store.state.error['httpCode'],
      title:  'Error ' + this.$store.state.error['httpCode'],
      msgError: this.$store.state.error['error']
    }
  }
}
</script>