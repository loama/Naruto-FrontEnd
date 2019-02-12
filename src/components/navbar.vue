<template>
  <div class="navbar">
    <img alt="Naruto logo" src="../assets/logo.png">
    <span class="title"> Characters </span>
    <input type="text"
           class="search"
           placeholder="search..."
           v-model="query"
           v-on:keyup="updateQuery()">
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    updateQuery () {
      this.$store.commit('updateSearchQuery', this.query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .navbar
    position: fixed
    top: 0
    left: 0
    z-index: 10
    height: 56px
    width: 100vw
    border-bottom: 1px solid #E0E0E0
    background: #FFFFFF

    img
      position: absolute
      top: 4px
      left: 16px
      height: 48px

    .title
      position: absolute
      top: 2px
      left: 96px
      line-height: 56px
      font-size: 24px
      font-weight: 600
      letter-spacing: -1px
      color: #A0A0A0

    input.search
      position: absolute
      top: 12px
      right: 16px
      height: 28px
      border-radius: 8px
      border: 1px solid #E0E0E0
      padding: 0 8px
      color: #4A4A4A
</style>
