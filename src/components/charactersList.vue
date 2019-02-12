<template>
  <div class="charactersList">
    {{searchQuery}}

    <div id="characterModal"
         v-bind:class="{active: this.$route.query.character !== undefined}"
         v-html="selectedCharacter.html_content">
    </div>
    <div id="modalOverlay"
         v-on:click="closeModal()"
         v-bind:class="{active: this.$route.query.character !== undefined}">
    </div>

    <ul>
      <li v-on:click="openModal(c.title)"
          v-for="c in filteredCharacters"
          v-bind:key="c.id">
        {{c.title}}
      </li>
    </ul>

  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'

const baseUrl = 'https://naruto-api-prod.herokuapp.com/v1/'

export default {
  name: 'charactersList',
  computed: {
    searchQuery () {
      return this.$store.state.searchQuery
    },
    filteredCharacters () {
      let characters = []
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i]['title'].includes(this.searchQuery)) {
          characters.push(this.characters[i])
        }
      }
      return characters
    }
  },
  data () {
    return {
      characters: [],
      selectedCharacter: ''
    }
  },
  methods: {
    closeModal () {
      router.push({ path: '/', query: {} })
      self.selectedCharacter = {}
    },
    openModal (title) {
      let self = this
      let encodedTitle = encodeURIComponent(title)
      router.push({ path: '/', query: { character: title } })
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
    if (this.$route.query.character !== undefined) {
      this.openModal(this.$route.query.character)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  ul
    list-style: none
    padding-top: 16px

    li
      cursor: pointer

  #characterModal
    position: fixed
    z-index: 11
    bottom: -100vh
    left: calc(10vw)
    min-height: 320px
    max-height: calc(100vh - 80px)
    overflow-y: scroll
    width: 80vw
    max-width: 1000px
    background: #FFFFFF
    border: 1px solid #D0D0D0
    transition: all 0.2s

    &.active
      transform: translate3d(0, calc(-100vh), 0)

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
