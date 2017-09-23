<template>
  <main>
    <navbar></navbar>
    <slider></slider>
  </main>
</template>

<script>
import Navbar from './Navbar.vue'
import Slider from './Slider/Slider.vue'

export default {
  name: 'main',
  components: {
    'navbar': Navbar,
    'slider': Slider
  },
  data () {
    return {
    }
  }
}
</script>
