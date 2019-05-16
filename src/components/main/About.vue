<template>
  <div class="content">
    <section class="flex flex-wrap" style="justify-content: center">
      <div>Sobre nós...</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
