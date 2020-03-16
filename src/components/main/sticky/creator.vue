<template>
  <div>
    <div class="CreatorEntrancePageHint">
      <svg class="act" fill="#8590a6" viewBox="0 0 24 24" width="18" height="18"><path d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z" fill-rule="evenodd"></path></svg>
      <span>创作者中心</span>
      <svg class="enter" fill="#8590a6" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg>
    </div>
    <div class="flex">
    <div class="ReadCountItem">
      <div class="tit">
        昨日回答阅读数
      </div>
      <div class="num">
        0
      </div>
      <div class="yes">
        较前日 <span>--</span>
      </div>
    </div>
    <div class="boder"></div>
    <div class="ReadCountItem">
      <div class="tit">
        昨日回答赞同数
      </div>
      <div class="num">
        0
      </div>
      <div class="yes">
        较前日 <span>--</span>
      </div>
    </div>
    </div>
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
.boder {
  margin-top: 17px; 
  height: 66px;
  width: 2px;
  border-right: 1px solid #eee;
}
.flex {
  display: flex;
}
.CreatorEntrancePageHint {
  height: 52px;
  width: 262px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #eee;
  position: relative;
  cursor: pointer;
}
.CreatorEntrancePageHint .act{
  position: absolute;
  vertical-align: middle;
  left: 10px;
  top: 17px;
}
.CreatorEntrancePageHint .enter{
  position: absolute;
  right: 0;
  top: 12px;
}
.CreatorEntrancePageHint span {
  position: absolute;
  vertical-align: middle;
  left: 40px;
  line-height: 52px;
  color: #8590a6;
  font-size: 15px;
}
.ReadCountItem {
  width: 130px;
  height: 100px;
  padding: 17px 0;
  text-align: center;
  vertical-align: middle;
}

.ReadCountItem .tit {
  color: #8590a6;
  font-size: 12px;
  line-height: 22px;
  height: 22px;
}
.ReadCountItem .num {
  color: #444;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
}
.ReadCountItem .yes {
  font-size: 12px;
  color: #8590a6;
  margin-right: 8px;
}
.ReadCountItem .yes span {
  font-size: 12px;
  margin-left: 4px;
  font-weight: 600;
  color: #000;
}
</style>