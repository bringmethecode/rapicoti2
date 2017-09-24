<template>
  <section>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://rapicoti.com">
          <img :src="logo" alt="rapicoti" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="menu" class="navbar-menu">
        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Descargar
              </a>
              <div class="navbar-dropdown is-right">
                <a class="navbar-item">
                  Play Store (Android)
                </a>
                <a class="navbar-item">
                  App Store (iPhone)
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <span style="font-weight: bold">Version</span>&nbsp;0.1.beta
                </div>
              </div>
          </div>

          <a class="navbar-item"
            @click="isComponentModalActive = true">
            Contacto
          </a>

          <div class="navbar-item">
            <a class="button is-primary is-outlined">Login</a>
          </div>

        </div>
      </div>
    </nav>
    <bModal :active.sync="isComponentModalActive" has-modal-card>
      <ContactForm id="contact" v-bind="formProps"></ContactForm>
    </bModal>
  </section>
</template>

<script>
import ContactForm from './Contact/ContactForm.vue'
import bModal from '../../node_modules/buefy/src/components/modal/Modal.vue'

export default {
  components: {
    ContactForm,
    bModal
  },
  name: 'navbar',
  props: {
    canCancel: {
      type: [Array, Boolean],
      default: () => ['escape', 'x', 'outside']
    }
  },
  data () {
    return {
      logo: require('../assets/logo.png'),
      isComponentModalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  },
  created: function () {
    document.addEventListener('DOMContentLoaded', function () {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target
            var $target = document.getElementById(target)
            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })
  }
}
</script>

<style>
.navbar {
  padding: 0 2em;
  min-height: 10vh;
}
.navbar-brand, .navbar-menu {
  min-height: 5vh;
  margin: auto;
}
.navbar-burger {
  min-height: 5vh;
  margin-top: auto;
  margin-bottom: auto;
}
.modal .animation-content {
  z-index: 999;
}
@media screen and (max-width: 1024px) {
  .navbar-brand {
    min-height: 10vh;
    margin: unset;
  }
}
</style>
