<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from './components/index'

export default {
  name: 'app',
  components: {
    index
  },
  data(){
    return {
    }
  },
  watch: {

  },
  mounted: function(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.center {
  width: 1000px;
  margin: 0 auto;
  display: block!important;
}
html {
  min-width: 1000px;
}
</style>
