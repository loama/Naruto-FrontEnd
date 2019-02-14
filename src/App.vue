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

  table.infobox
    float: right
    width: 304px
    background: #F0F0F0
    margin: 16px 0 16px 16px
    border: 1px solid #D0D0D0

    .mainheader
      .plainlinks
        display: none

      sup
        display: none

    th, td
      border-bottom: 1px solid #D0D0D0
      padding-bottom: 10px

    th.mainheader
      text-align: center
      width: 100%

      .ultisup-image-popup, .image-thumbnail
        display: none

    th:last-child
      border-bottom: none

    img[alt="Icon_-_Search.png"]
      display: none

    a
      &:visited
        color: red

  figure
    float: right

  h2
    border-bottom: 1px solid #D0D0D0

  a
    color: #03A9F4
    text-decoration: none

    &:visited
      color: #01579B

  ol.references
    text-align: left

  ul.forum-discussions
    text-align: left
    padding-left: 0

    img.forum-user-avatar
      display: inline-block

  .mainImage
    position: absolute
    top: 48px
    right: 26px
    width: 288px

  #toc
    display: none

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
