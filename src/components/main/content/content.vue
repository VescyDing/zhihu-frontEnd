<template>
  <div class="content">
    <div id="cnav">
      <ul>
        <li><router-link to="/recommend" active-class="actived">推荐</router-link></li>
        <li><router-link to="/attention" active-class="actived">关注</router-link></li>
        <li><router-link to="/hotsearch" active-class="actived">热榜</router-link></li>
      </ul>
    </div>
    <div id="ccon"></div>
  </div>
</template>

<script>
  

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='css' scoped>
.content {
  width: 694px;
  height: 2640px;
}
#cnav *{
  display: inline-block
}
#cnav {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #eee;
}
#cnav ul li a{
  width: 32px;
  height: 58px;
  margin: 0 22px;
  font-size: 16px;
  line-height: 58px;
  text-align: center;
  text-decoration:none;
  color: #000;
}
#ccon {
  width: 100%;
  height: 2580px;
}
.actived {
  color: #0084ff!important;
}

</style>