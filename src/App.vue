<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";
  // Set your colors
  $primary: #8BC34A;
  $primary-invert: findColorInvert($primary);
  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "primary": ($primary, $primary-invert),
  );
  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
