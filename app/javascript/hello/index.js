import { createApp, ref } from 'vue'

createApp({
  setup() {
    const title = ref('Hello#index')
    const message = ref('Hello Vue!')

    return {
      title,
      message
    }
  }
}).mount('#app')
