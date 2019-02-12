<template>
  <div id="app">
    <navbar />
    <charactersList />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import charactersList from './components/charactersList.vue'

export default {
  name: 'app',
  components: {
    navbar,
    charactersList
  }
}
</script>

<style lang="sass">
  html, body
    margin: 0
    padding: 0

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 56px
</style>
