<template>
  <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 14px;margin-right: 14px">
        <el-tab-pane class="cnavitem" label="推荐" name="recommend"></el-tab-pane>
        <el-tab-pane class="cnavitem" label="关注" name="attention"></el-tab-pane>
        <el-tab-pane class="cnavitem" label="热榜" name="hotsearch"></el-tab-pane>
      </el-tabs>
    <div id="ccon"></div>
  </div>
</template>

<script>
  

  export default {
    name:'',
    props:[''],
    data () {
      return {
        activeName: 'recommend'
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        if (!this.$cookies.get('loginStatus')){
            this.$router.push('/login')
        } else {
            if (!this.$cookies.get('loginStatus').isLogin){
                this.$router.push('/login')
            }
        }
    },

    methods: {
      handleClick(){

      },
    },

    watch: {}

  }

</script>
<style lang='css' scoped>
.content {
  width: 694px;
  height: 2640px;
}


</style>