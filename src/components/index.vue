<template>
  <div>
    <el-container>
      <el-header class="my-el-header">
        <mynav />
        </el-header>
      <el-main class="mainbgc">
        <mymain />
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import mynav from './nav/nav'
  import mymain from './main/main'

  export default {
    name:'',
    props:[''],
    data () {
      return {
      };
    },

    components: {
        mynav,
        mymain
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='css' scoped>
.relative {
  position: relative;
}
.my-el-header {
  margin-top: 0;
  width: 100%;
  padding: 0;
  height: 50px!important;
  z-index: 999;
  position: fixed;
  top: 0;
  background-color: #fff;
}
.mainbgc {
  margin-top: 50px;
  width: 100%;
  height: 2660px;
  background-color: rgb(246,246,246);
  padding-top: 10px;
  padding-bottom: 0;
}
</style>