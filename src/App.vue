<template>
  <div id="app">
    <navbar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    navbar,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 72px;
}
</style>
