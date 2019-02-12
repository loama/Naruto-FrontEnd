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

    <div class="section"
         v-bind:key="key"
         v-for="(section, key) in characters">
      <div class="title">{{key}}</div>
      <ul>
        <li v-on:click="openModal(c.title)"
            v-for="c in section"
            v-bind:key="c.id">
          <img v-bind:src="c.thumbnail">
          <div class="title"> {{c.title}} </div>
        </li>
      </ul>
    </div>

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
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      characters: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
        other: []
      },
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
          self.selectedCharacter = {
            thumbnail: response.data.data.thumbnail,
            html_content: response.data.data.html_content
          }

          var modal = document.getElementById('characterModal')
          var images = modal.getElementsByTagName('img')

          var imageLink
          if (images[2] !== undefined) {
            imageLink = images[2].attributes['data-src'].nodeValue || ''
          } else {
            imageLink = ''
          }

          self.selectedCharacter = {
            thumbnail: response.data.data.thumbnail,
            html_content: /* '<img src="' + imageLink + '" class="mainImage">' + */ response.data.data.html_content
          }

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchCharacters () {
      let self = this
      axios.get(baseUrl + 'characters')
        .then(function (response) {
          let characters = response.data.data
          for (var i = 0; i < characters.length; i++) {
            let section = characters[i]['title'].charAt(0).toLowerCase()
            if (self.alphabet.includes(section.toUpperCase())) {
              self.characters[section].push(characters[i])
            } else {
              self.characters['other'].push(characters[i])
            }
          }
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
  .charactersList
    padding-top: 24px

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
      padding-left: 16px

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
      cursor: pointer

      &.active
        display: block

    .section
      > .title
        position: sticky
        top: 56px
        line-height: 56px
        font-size: 20px
        font-weight: 600
        z-index: 9
        text-transform: uppercase

      ul
        width: 100%
        padding-left: 0
        list-style: none
        text-align: center

        li
          position: relative
          cursor: pointer
          border: 1px solid #E0E0E0
          width: 320px
          margin-left: calc(50% - 160px)
          height: 48px
          line-height: 48px
          margin-bottom: -1px

          &:hover
            background: #F0F0F0

          img
            position: absolute
            top: 8px
            left: 8px

          .title
            position: absolute
            top: 0
            left: 64px

    @media screen and (min-width: 1250px)
      #characterModal
        left: calc(50vw - 500px)
</style>
