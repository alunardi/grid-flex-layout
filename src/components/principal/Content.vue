<template>
  <div class="content">
    <section class="flex flex-wrap" style="justify-content: center">
      <div class="item-flex">
        <img alt="Batman" width="250" height="300" src="../../assets/batman.jpeg">
        <div>
          Camisa do Batman
        </div>
        <div>
          R$0,00
        </div>
      </div>
      <div class="item-flex">
        <img alt="Batman" width="250" height="300" src="../../assets/batman.jpeg">
        <div>
          Camisa do Batman
        </div>
        <div>
          R$0,00
        </div>
      </div>
      <div class="item-flex">
        <img alt="Batman" width="250" height="300" src="../../assets/batman.jpeg">
        <div>
          Camisa do Batman
        </div>
        <div>
          R$0,00
        </div>
      </div>
      <div class="item-flex">
        <img alt="Batman" width="250" height="300" src="../../assets/batman.jpeg">
        <div>
          Camisa do Batman
        </div>
        <div>
          R$0,00
        </div>
      </div>
      <div class="item-flex">
        <img alt="Batman" width="250" height="300" src="../../assets/batman.jpeg">
        <div>
          Camisa do Batman
        </div>
        <div>
          R$0,00
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'About Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .item-flex {
    margin: 5px;
    padding: 5px;
    height: auto;
    background: lightgray;
    text-align: center;
    font-size: 1em;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
