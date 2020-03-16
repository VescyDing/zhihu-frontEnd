<template>
  <div class="sticky">
    <div id="globalwrite">
      <globalwrite />
    </div>
    <div id="creator">
      <creator />
    </div>
    <div id="card">
      <card />
    </div>
    <div class="ad">
      <img :src="ad_1" alt="">
      <div class="adtag">广告</div>
      <div class="close">
        <img :src="close" alt="不再显示">
      </div>
    </div>
    <div id="sidebar">
      <sidebar />
    </div>
    <div class="ad">
      <img :src="ad_2" alt="">
      <div class="adtag">广告</div>
      <div class="close">
        <img :src="close" alt="不再显示">
      </div>
    </div>
    <div id="footer">
      <footer class="Footer">
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="//liukanshan.zhihu.com/"
        >刘看山</a>
        <span class="Footer-dot"></span>
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="/question/19581624"
        >知乎指南</a>
        <span class="Footer-dot"></span>
        <a class="Footer-item" target="_blank" rel="noopener noreferrer" href="/terms">知乎协议</a>
        <span class="Footer-dot"></span>
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="/term/privacy"
        >知乎隐私保护指引</a>
        <br />
        <a class="Footer-item" target="_blank" href="/app">应用</a>
        <span class="Footer-dot"></span>
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.mokahr.com/apply/zhihu"
        >工作</a>
        <span class="Footer-dot"></span>
        <a class="Footer-item" target="_blank" rel="noopener noreferrer" href="#">申请开通知乎机构号</a>
        <br />
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://zhuanlan.zhihu.com/p/51068775"
        >侵权举报</a>
        <span class="Footer-dot"></span>
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.12377.cn"
        >网上有害信息举报专区</a>
        <br />
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tsm.miit.gov.cn/dxxzsp/"
        >京 ICP 证 110745 号</a>
        <br />
        <a
          class="Footer-item"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
        >
          <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />京公网安备 11010802010035 号
        </a>
        <br />
        <span class="Footer-item">违法和不良信息举报：010-82716601</span>
        <br />
        <a class="Footer-item" target="_blank" href="/jubao">儿童色情信息举报专区</a>
        <br />
        <a class="Footer-item" target="_blank" href="/certificates">证照中心</a>
        <br />
        <a class="Footer-item" target="_blank" href="/contact">联系我们</a>
        <span> © 2019 知乎</span>
      </footer>
    </div>
  </div>
</template>

<script>
import globalwrite from './globalwrite'
import creator from './creator'
import card from './card'
import sidebar from './sidebar'

export default {
  name: "",
  props: [""],
  data() {
    return {
      ad_1: require('../../../assets/img/ad_1.jpeg'),
      ad_2: require('../../../assets/img/ad_2.jpeg'),
      close: require('../../../assets/img/close.svg'),
      clshow: false
    };
  },

  components: {
    globalwrite,
    creator,
    card,
    sidebar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.sticky {
  width: 296px;
  height: 1538px;
  box-sizing: border-box;
}
.sticky>div {
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 2px;
  background-color: #fff;
}
#globalwrite {
  width: 296px;
  height: 194px;
}
#creator {
  width: 296px;
  height: 153px;
  padding: 0 17px;
}
#card {
  width: 296px;
  height: 175px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
.ad {
  width: 296px;
  height: 246.66px;
  position: relative;
}
.ad img {
  display: block;
  width: 100%;
  border-radius: 2px;
}
.ad .adtag{
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 45px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  color: #ebebeb;
  background-color: #000;
  opacity: .5;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  background-color: #fff;
  border-radius: 15px!important;
  visibility: hidden;
  transition: all 0.2s ease-in;
  opacity: 0;
}
.ad:hover .close{
  visibility: visible;
  transition: all 0.2s ease-in;
  opacity: 1;
}
#sidebar {
  width: 296px;
  height: 216px;
  padding: 8px 0;
}
#footer {
  width: 296px;
  height: 245px;
  padding: 10px 0 10px 5px;
  font-size: 13px;
  line-height: 2;
  text-decoration: none !important;
  color: #8590a6;
  background-color: rgb(246,246,246);
  box-shadow: 0 0 0;
}
.Footer-item {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none !important;
  color: #8590a6;
}
.Footer-item img {
    margin-right: 4px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.Footer-dot {
  width: 2px;
  height: 2px;
  margin: 5px 5px;
}
.Footer-dot::after {
  content: '·';
  color: #8590a6;
  font-weight: 700;
}
</style>