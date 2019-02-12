<template>
  <div class="charactersList">
    {{searchQuery}}
    {{selectedCharacter}}
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
      selectedCharacter: null
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
</style>
