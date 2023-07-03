<template>
  <h2>Image of the day</h2>
  <AstrobinToday></AstrobinToday>
</template>

<script>
  import AstrobinToday from '@/components/astrobin/AstrobinToday.vue'

  export default {
    name: 'PageToday',
    components: {
      AstrobinToday
    }
  }
</script>