<template>
  <section>

    <form action="">
      <div class="box">
        <h1 class="title is-1">¿Dudas, sugerencias, comentarios?</h1>
        <h4 class="subtitle is-4">En RAPICOTI siempre nos interesa escucharte.</h4>
        <b-field grouped>
          <b-input placeholder="Nombre"
            expanded
            type="text"
            icon="format_color_text">
          </b-input>
          <b-input placeholder="Email"
            expanded
            type="email"
            icon="email">
          </b-input>
        </b-field>

        <b-field>
          <b-input type="textarea"
            minlength="10"
            maxlength="300"
            placeholder="Mensaje">
          </b-input>
        </b-field>

        <b-field grouped position="is-right">
          <button class="button send">
            <b-icon icon="send"></b-icon>
            <span>ENVIAR</span>
          </button>
        </b-field>

      </div>
    </form>

  </section>
</template>

<script>
  export default {
    name: 'ContactForm',
    data () {
      return {
        nombre: ''
      }
    }
  }
</script>

<style scoped>
  .box {
    max-width: 600px;
    background: linear-gradient(to bottom right, #FFEE58, #F9A825);
  }
  .animation-content {
    z-index: 999;
  }
  .send {
    background-color: #536DFE;
    color: #fff;
  }
</style>
