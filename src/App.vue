<template>
  <div id="app">
    <Indicator color="#bf2923"></Indicator>
    <Head-Bar head-color="#fff" icon-color="#000">
      <a slot="logo" href="https://vision.udn.com/" target="_blank"><img class="other_logo" src="../static/visual-logo.png" alt="聯合報系願景工程"></a>
      <a href="https://udn.com">聯合新聞網</a>
      <a href="https://udn.com">聯合新聞網2</a>
    </Head-Bar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
