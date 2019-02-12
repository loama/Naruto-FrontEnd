<template>
  <div class="charactersList">
    {{searchQuery}}

    <div id="characterModal"
         v-bind:class="{active: selectedCharacter !== ''}"
         v-html="selectedCharacter.html_content">
      {{selectedCharacter}}
    </div>
    <div id="modalOverlay"
         v-on:click="selectedCharacter = ''"
         v-bind:class="{active: selectedCharacter !== ''}">
    </div>

    <ul>
      <li v-on:click="openModal(c.title)"
          v-for="c in characters"
          v-bind:key="c.id">
        {{c.title}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'

const baseUrl = 'https://naruto-api-prod.herokuapp.com/v1/'

export default {
  name: 'charactersList',
  computed: {
    searchQuery () {
      return this.$store.state.searchQuery
    }
  },
  data () {
    return {
      characters: [],
      selectedCharacter: ''
    }
  },
  methods: {
    openModal (title) {
      let self = this
      let encodedTitle = encodeURIComponent(title)
      axios.get(baseUrl + 'characters/' + encodedTitle)
        .then(function (response) {
          self.selectedCharacter = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchCharacters () {
      let self = this
      axios.get(baseUrl + 'characters')
        .then(function (response) {
          self.characters = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchCharacters()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  ul
    list-style: none
    max-height: calc(100vh - 80px)
    overflow-y: scroll
    padding-top: 16px

    li
      cursor: pointer

  #characterModal
    position: absolute
    z-index: 11
    top: -100vh
    left: calc(10vw)
    min-height: 320px
    width: 80vw
    max-width: 1000px
    background: #FFFFFF
    border: 1px solid #D0D0D0
    transition: all 0.2s

    &.active
      transform: translate3d(0, calc(100vh - 80px), 0)

  #modalOverlay
    position: fixed
    z-index: 10
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    background: #000000
    opacity: 0.8
    display: none

    &.active
      display: block


  @media screen and (min-width: 1250px)
    #characterModal
      left: calc(50vw - 500px)
</style>
