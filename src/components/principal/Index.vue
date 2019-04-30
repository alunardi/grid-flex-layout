<template>
  <div class="container">
    <div class="item item-1 background-black"></div>
    <div class="item item-2 background-black"></div>
    <div class="item item-3 background-black">
      <router-link to="/">
        Home
      </router-link>
    </div>
    <div class="item item-4 background-black"></div>
    <div class="item item-5 background-black"></div>
    <div class="item item-6 background-black">
      <button @click="menu = !menu" @focusout="closeCollapseMenu">
        <i class="fa fa-align-justify" style="font-size: 2em;"></i>
      </button>
      <transition name="fade">
        <div v-if="menu" class="collapse-menu">
          <p>
            <router-link to="about">
              Sobre Nós
            </router-link>
          </p>
        </div>
      </transition>
    </div>
    <div class="item item-7 background-black">
      <button @click="search = !search" @focusout="closeCollapseMenu">
        <i class="fa fa-search" style="font-size: 2em;"></i>
      </button>
      <transition name="fade">
        <div v-if="search" class="collapse-menu">
          <p>
            <router-link to="about">
              Pesquisar
            </router-link>
          </p>
        </div>
      </transition>
    </div>
    <div class="item item-8 background-black menu-text">
      <router-link to="about">
        Sobre Nós
      </router-link>
      &nbsp;|&nbsp;
      <router-link to="contact">
        Fale Conosco
      </router-link>
      &nbsp;|&nbsp;
      <router-link to="about">
        Sobre Nós
      </router-link>
      &nbsp;|&nbsp;
      <router-link to="contact">
        Fale Conosco
      </router-link>
    </div>
    <div class="item item-9 background-black">
      <button @click="login = !login" @focusout="closeCollapseMenu">
        <i class="fa fa-user" style="font-size: 2em;"></i>
      </button>
      <transition name="fade">
        <div v-if="login" class="collapse-menu">
          <p>
            <router-link to="about">
              Login
            </router-link>
          </p>
        </div>
      </transition>
    </div>
    <div class="item item-10 background-black">
      <i class="fa fa-shopping-cart" style="font-size: 2em;"></i>
    </div>
    <div class="item item-11"></div>
    <div class="item item-12"></div>
    <div class="item item-13">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <div class="item item-14"></div>
    <div class="item item-15"></div>
    <div class="item item-16 background-black"></div>
    <div class="item item-17 background-black"></div>
    <div class="item item-18 background-black">Info</div>
    <div class="item item-19 background-black"></div>
    <div class="item item-20 background-black"></div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu: false,
      search: false,
      login: false
    }
  },
  watch: {
    search (value) {
      if (value) {
        this.menu = false
        this.login = false
      }
    },
    menu (value) {
      if (value) {
        this.search = false
        this.login = false
      }
    },
    login (value) {
      if (value) {
        this.menu = false
        this.search = false
      }
    }
  },
  methods: {
    closeCollapseMenu () {
      this.search = this.login = this.menu = false
    }
  }
}
</script>

<style scoped>
  button {
    background: none!important;
    color: inherit;
    border: none;
    padding: 0!important;
    font: inherit;
    cursor: pointer;
  }

  .container {
    display: grid;
    background-color: rgba(0, 0, 0, 0.0);
    height: auto;
    grid-template-columns: auto auto 80vw auto auto;
    grid-template-rows: auto auto auto auto;
  }

  .item {
    background-color: white;
  }

  .background-black {
    background-color: black;
    color: white;
    padding: 10px;
  }

  .menu-text {
    padding-top: 20px;
  }

  .collapse-menu {
    background-color: black;
    max-width: 100px;
    z-index: 10;
    position: fixed;
    padding: 5px;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
