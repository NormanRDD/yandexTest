<template>
  <div class="map-container">
    <yandex-map :coords="initCoords" :zoom="10"> </yandex-map>
  </div>
</template>

<script>
// import { loadYmap } from 'vue-yandex-maps'
import { yandexMap } from 'vue-yandex-maps'

export default {
  name: 'yandex-map',
  components: { yandexMap },
  data() {
  return {
      mycoords: null,
      initCoords: [43.243513, 76.909821],
      markerIcon: {
        layout: "islands#redDotIcon",
      },
      markers: [],
    };
  },
  methods: {},
}
</script>
