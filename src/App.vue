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
  .tiweninput .el-input__inner {
    border: 0;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 20px;
  }

  #signInput .el-form-item__label{
    font-size: 20px;
  }
  #signInput .el-input__inner {
    font-size: 20px;
  }

.questionAdd .el-dialog__body{
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 0;
}
</style>
