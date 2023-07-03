<template>
  <v-alert
    v-if="200 !== this.httpCode"
    type="error"
    icon="$error"
    density="compact"
    :title="httpCode"
    :text="msgError"
  >
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorMessage',
  data () {
    return {
      httpCode: 'Error ' + this.$store.state.error['httpCode'],
      msgError: this.$store.state.error['error']
    }
  }
}
</script>