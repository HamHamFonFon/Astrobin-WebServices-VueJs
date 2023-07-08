<template>
  <v-alert
    :type="type"
    icon="mdi-reloading"
    density="compact"
    :title="title"
  >
    <template v-slot:icon>
      <img :src="loading" alt="Loading..." width="24" height="24" />
    </template>
    <span>{{ msgError }}</span>
  </v-alert>
</template>

<script>
import loading from '@/assets/images/loading.gif'

export default {
  name: 'ErrorMessage',
  data () {
    return {
      loading: loading,
      show: this.$store.state.message['show'],
      httpCode: this.$store.state.message['httpCode'],
      type: this.$store.state.message['type'],
      title: this.$store.state.message['type'],
      msgError: this.$store.state.message['message']
    }
  }
}
</script>