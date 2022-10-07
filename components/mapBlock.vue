<template>
  <div>
    <YandexMap></YandexMap>
  </div>
</template>
<script>
import YandexMap from '~/components/yandex.vue'

export default {
  name: 'mapBlock',
  data() {
    return {
      deliveryBtn: true,
      pickUpBtn: false,
      qr: false,
      cart: false,
      cash: true,
    }
  },
  components: {
    YandexMap,
  },
}
</script>
