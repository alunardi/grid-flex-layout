<template>
  <div class="container">
    <div class="item item-1"></div>
    <div class="item item-2">Logo<br></div>
    <div class="item item-3"></div>
    <div class="item item-4"><i class="fa fa-align-justify" style="font-size: 24px"></i></div>
    <div class="item item-5">Menu | Menu | Menu | Menu | Menu</div>
    <div class="item item-6">Login | Carrinho</div>
    <div class="item item-7"></div>
    <div class="item item-8">
      <section class="flex flex-wrap" style="justify-content: center">
        <div class="item-flex">Teste 1</div>
        <div class="item-flex">Teste 2</div>
        <div class="item-flex">Teste 3</div>
        <div class="item-flex">Teste 4</div>
        <div class="item-flex">Teste 5</div>
        <div class="item-flex">Teste 6</div>
        <div class="item-flex">Teste 7</div>
        <div class="item-flex">Teste 8</div>
      </section>
    </div>
    <div class="item item-9"></div>
    <div class="item item-10"></div>
    <div class="item item-11">Rodapé</div>
    <div class="item item-12"></div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    background-color: rgba(0, 0, 0, 0.0);
    height: auto;
    grid-template-columns: auto 80% auto;
    grid-template-rows: auto auto 80% auto;
  }

  .item {
    background-color: white;
  }

  .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-10, .item-11, .item-12 {
    background-color: black;
    color: white;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  /* Flex Item */
  .item-flex {
    margin: 0.5%;
    width: 20%;
    height: auto;
    background: tomato;
    text-align: center;
    font-size: 1em;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
