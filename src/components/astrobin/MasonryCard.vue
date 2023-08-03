  <template #default="{ item, index }">
    <v-card
        color="grey-lighten-1"
        :class="['ma-4']"
        :data-index="index"
    >
      <v-img
        cover
        :src="item.image"
      >
        <div class="d-flex fill-height align-center justify-center">
          <div class="text-h4 text-white">{{ item.date }}
            <div class="text-h6 text-white">{{ item.title }}</div>
          </div>
        </div>
      </v-img>
    </v-card>
</template>

<script>
export default {
  name: "MasonryCard",
  props: {
    item: {
      default: null,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>