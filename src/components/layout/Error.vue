<template>
  <v-alert
    type="error"
    density="compact"
    title="Error"
    :text="msgError"
  >
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorMessage',
  data () {
    return {
      msgError: this.$store.state.error['error']
    }
  }
}
</script>