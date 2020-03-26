<template>
  <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 14px;margin-right: 14px">
        <el-tab-pane class="cnavitem" label="推荐" name="recommend">
            <div class="pd20" v-for="item in questionList">
                    <h2 class="ContentItem-title">{{item.title}}</h2>
                <div class="RichContent" @click="goToQues(item)" v-html="item.content">
                </div>
                <div class="ContentItem-actions">
                    <el-button style="color: #0084ff;background: rgba(0,132,255,.1);border: 0" size="mini" type="primary" @click="startsOption({startsCount: item.startsCount+1, _id: item._id})" icon="el-icon-caret-top">赞同 {{item.startsCount}}</el-button>
                    <el-button style="margin-right: 40px;color: #0084ff;background: rgba(0,132,255,.1);border: 0" size="mini"  type="primary" @click="startsOption({startsCount: item.startsCount-1, _id: item._id})" icon="el-icon-caret-bottom"></el-button>
                    <el-button size="mini"style="font-size: 14px;color: #8590a6" type="text" icon="el-icon-chat-line-round">{{item.answerCount}} 条回答</el-button>
                    <el-button size="mini"style="font-size: 14px;color: #8590a6" type="text" icon="el-icon-chat-dot-round">{{item.commentCount}} 条评论</el-button>
                    <el-button size="mini"style="font-size: 14px;color: #8590a6" type="text" icon="el-icon-view">{{item.visitCount}} 次浏览</el-button>
                </div>
            </div>
        </el-tab-pane>
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
          activeName: 'recommend',
          questionList: []
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        this.init()
    },

    methods: {
        handleClick(){

        },
        init (){
            if (!this.$cookies.get('loginStatus')){
                this.$router.push('/login')
            } else if (!this.$cookies.get('loginStatus').isLogin){
                this.$router.push('/login')
            } else {
                const that = this
                this.$axios.get('/question', {}, res => {
                    if (res.status != 200){
                        that.$message({
                            showClose: true,
                            message: res.data.message,
                            type: 'error'
                        });
                    } else {
                        console.log(res.data.questionList);
                        that.questionList = res.data.questionList.reverse()
                    }
                })
            }
        },
        goToQues(data){
            this.$store.commit('selectedQues', data)
            console.log(this.$store.getters['selectedQues']);
            this.$router.push('/question')
        },
        startsOption(data){
            this.$axios.put('/question/startsCount', {
                startsCount: data.startsCount,
                _id:    data._id,
            }, res => {
                this.init()
            })
        }
    },

    watch: {}

  }

</script>
<style lang='css' scoped>
.content {
  width: 694px;
  height: 2640px;
}
.pd20{
    padding: 20px;
    width: 654px;
    height: auto;
    max-height: 130px;
    border-bottom: 1px solid #f0f2f7;
}
    .ContentItem-title{
        font-size: 18px;
        font-weight: bold;
        font-synthesis: style;
        line-height: 1.6;
        color: #1a1a1a;
        margin-top: -4px;
        margin-bottom: -4px;
    }
    .RichContent {
        cursor: pointer;
        -webkit-transition: color .14s ease-out;
        transition: color .14s ease-out;
        max-height: 100px;
        margin-top: 9px;
        margin-bottom: -4px;
        overflow: hidden;
        height: auto;
        max-height: 48px;
        text-overflow: ellipsis;
        margin-bottom: 4px;
    }
    .ContentItem-actions {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 -20px -10px;
        color: #646464;
        background: #fff;
        clear: both;
    }


</style>