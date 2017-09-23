<template>
  <agile :arrows="false" :speed="500"
      :timing="'ease-in-out'"
      :autoplay="false"
      :autoplaySpeed="5000"
      :pauseOnHover="false">
      <div class="slide slide--1">
        <h1 v-if="isMobile" class="slideText slideText-1">Cotizaciones:
          <br /><span>A un solo click,</span>
          <br /><span>Rapidas,</span>
          <br /><span>Efectivas.</span>
        </h1>
        <img class="slidePhone slidePhone-1" :src="slide1phone" />
      </div>
      <div class="slide slide--2">
        <h1 class="slideText slideText-2">Cotizaciones:
          <br /><span>A un solo click</span>
          <br /><span>Rapidas</span>
          <br /><span>Efectivas.</span>
        </h1>
        <img class="slidePhone slidePhone-2" :src="slide2phone" />
      </div>
      <div class="slide slide--3"></div>
  </agile>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      isMobile: null,
      slide1phone: require('../../assets/slides/pixelmockup.png'),
      slide2phone: require('../../assets/slides/pixelmockup2.png')
    }
  },
  created () {
    if (screen.width > 500) {
      return {
        isMobile: false
      }
    }
    return {
      isMobile: true
    }
  }
}
</script>

<style lang="scss">
  @import "./slider.scss";
  @import "./queries.scss";
</style>
