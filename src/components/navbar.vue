<template>
  <div class="navbar">
    <img alt="Naruto logo" src="../assets/logo.png">
    <span class="title"> Characters </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
