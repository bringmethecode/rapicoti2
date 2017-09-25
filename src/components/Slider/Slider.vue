<template>
  <agile :arrows="false" :speed="500"
      :timing="'ease-in-out'"
      :autoplay="false"
      :autoplaySpeed="5000"
      :pauseOnHover="false">

      <div class="slide slide--1">
        <h1 v-if="isDesktop" class="slideText slideText-1">Cotizaciones:
          <br /><span>A un solo click,</span>
          <br /><span>Rapidas,</span>
          <br /><span>Efectivas.</span>
        </h1>
        <h1 class="slideTextMobile" v-else>
          Cotizaciones:
          <br />
          <span>A un solo click, rápidas, efectivas.</span>
        </h1>
        <img class="slidePhone slidePhone-1" :src="slide1img" />
      </div>

      <div class="slide slide--2">
        <h1 v-if="isDesktop" class="slideText slideText-2">Cientos de proveedores:
          <br /><span>cientos de cotizaciones,</span>
          <br /><span>cientos de respuestas.</span>
        </h1>
        <h1 class="slideTextMobile" v-else>
          Cientos de proveedores:
          <br />
          <span>Cientos de cotizaciones, cientos de respuestas.</span>
        </h1>
        <img class="slidePhone slidePhone-2" :src="slide2img" />
      </div>

  </agile>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      isDesktop: null,
      slide1img: require('../../assets/slides/slide1phone.png'),
      slide2img: require('../../assets/slides/slide2phone.png')
    }
  },
  created () {
    if (screen.width > 500) {
      this.isDesktop = true
    } else {
      this.isDesktop = false
    }
  }
}
</script>

<style lang="scss">
  @import "./slider.scss";
  @import "./queries.scss";
</style>
