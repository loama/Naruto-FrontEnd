<template>
  <div id="app">
    <navbar />
    <charactersList />
    <footer>
      <a href="https://github.com/loama/Naruto-FrontEnd" taget="_blank">
        <img src="./assets/GitHub-Mark.png">
      </a>
    </footer>
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
    margin-top: 64px

  footer
    img
      height: 56px
      margin-top: 8px
      margin-bottom: 16px
      opacity: 0.2

      &:hover
        opacity: 1
        cursor: pointer
</style>
