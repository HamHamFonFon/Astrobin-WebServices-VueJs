<template>
  <!-- App bar header -->
  <AppBar />

  <div>
    <slot></slot>
  </div>
</template>

<script>
import AppBar from '@/components/layout/AppBar'

export default {
  name: "DefaultLayout",
  components: {
    AppBar
  }
}
</script>