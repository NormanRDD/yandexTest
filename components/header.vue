<template>
  <div>
    <map-block></map-block>
  </div>
</template>
<script>
import { loadYmap } from 'vue-yandex-maps'
import mapBlock from '../components/mapBlock.vue'

export default {
  anme: 'headerBlock',
  components: {
    mapBlock,
  },
  async created() {
    await loadYmap({
      apiKey: '0cd1b914-7760-4941-bd75-7b72db37a9f6',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1',
      debug: true,
    })
  },
}
</script>
