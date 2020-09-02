<template>
  <div id="app" class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './views/Header'

export default {
  components:{
    Header
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'MEVN Todo List'
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
