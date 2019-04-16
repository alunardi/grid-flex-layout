<template>
  <div class="hello">
    <h1>display: block;</h1>
    <section class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </section>

    <h1>display: flex;</h1>
    <section class="container flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </section>

    <h1>display: flex;</h1>
    <section class="container flex flex-wrap">
      <div class="item">Teste 1</div>
      <div class="item">Teste 2</div>
      <div class="item">Teste 3</div>
      <div class="item">Teste 4</div>
      <div class="item">Teste 5</div>
      <div class="item">Teste 6</div>
      <div class="item">Teste 7</div>
    </section>

    <h1>display: flex; // flex-item-1</h1>
    <section class="container flex">
      <div class="item flex-item-1">Teste 1</div>
      <div class="item flex-item-1">Teste 2</div>
      <div class="item flex-item-1">Teste 3</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-item-1 {
  flex: 1;
}

/* Flex Item */
.item {
  margin: 5px;
  background: tomato;
  text-align: center;
  font-size: 1.5em;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
}

h1 {
  text-align: center;
  margin: 20px 0 0 0;
  font-size: 1.25em;
  font-weight: normal;
}
</style>
