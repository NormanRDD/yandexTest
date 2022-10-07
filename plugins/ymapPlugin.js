import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '0cd1b914-7760-4941-bd75-7b72db37a9f6',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

Vue.use(YmapPlugin, settings)
