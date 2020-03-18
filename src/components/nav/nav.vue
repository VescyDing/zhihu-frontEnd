<template>
  <div class="nav" ref="nav">
    <div :class="{scrollCtrl: scrollCtrl, scrollCtrlEnd: !scrollCtrl}">
      <div class="center">
        <img id="logo" :src="logoUrl" />
        <div class="navopt">
          <ul>
            <li class="navopt-hover" @click="() => this.$router.push('/')">首页</li>
            <li>发现</li>
            <li>等你来答</li>
          </ul>
        </div>
        <mysearch />
        <personal />
      </div>
      <div class="center">
          <img id="logo" :src="logoUrl" />
          <div id="cnav">
            <ul>
              <li><router-link to="/recommend" active-class="actived">推荐</router-link></li>
              <li><router-link to="/attention" active-class="actived">关注</router-link></li>
              <li><router-link to="/hotsearch" active-class="actived">热榜</router-link></li>
            </ul>
          </div>
          <div class="right">
          <el-input 
            placeholder="搜索你感兴趣的内容..."
            size="small"
            suffix-icon="el-icon-search"
            style="
              width: 216px;
            "
            ></el-input>
            <el-button type="primary"
            size="small"
            style="
            width: 58px;
            margin-left: 16px;
            height: 32px;
            vertical-align: middle;
            font-size: 14px;
            "
            >提问</el-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import mysearch from "./search";
import personal from "./personal";
export default {
  name: "nav",
  props: [""],
  data() {
    return {
      logoUrl: require("../../assets/img/logo.png"),
      scrollCtrl: true
    };
  },

  components: {
    mysearch,
    personal
  },

  computed: {},

  beforeMount() {},

  mounted() {
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 70) {
        this._data.scrollCtrl = false
      } else {
        this._data.scrollCtrl = true
      }
    });
  },

  methods: {

  },

  watch: {}
};
</script>
<style lang='css' scoped>
.right {
  position: absolute;
  right: 0;
  top: 10px;
}
.nav * {
  display: inline-block;
}
.center {
  position: relative;
}
.navoptSec {
  width: 100%;
  height: 50px;
}
.nav {
  padding: 0 16px;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-sizing: border-box;
  overflow: hidden;
}
.scrollCtrl {
  width: 100%;
  transform: translateY(0px);
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}
.scrollCtrlEnd {
  width: 100%;
  transform: translateY(-50px);
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1)
  
}

#logo {
  display: inline-block;
  width: 64px;
  height: 30px;
  margin-right: 40px;
  vertical-align: middle; /* 这个居中方法很重要 */
}

.navopt ul li {
  height: 50px;
  line-height: 50px;
  padding: 0 17px;
  text-align: center;
  color: #aaa;
  font-weight: normal;
  font-size: 15px;
}

.navopt ul li:hover {
  color: #000;
  cursor: pointer;
}

.navopt-hover {
  border-bottom: 2px solid #0084ff;
  color: #000 !important;
  font-weight: 700 !important;
}

#cnav *{
  display: inline-block
}
#cnav {
  height: 59px;
  border-bottom: 1px solid #eee;
}
#cnav ul li a{
  width: 32px;
  height: 50px;
  margin: 0 22px;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  text-decoration:none;
  color: #000;
}

.actived {
  color: #0084ff!important;
}
</style>