<template>
  <div id="main">
    <mycontent id="mycontent"/>
    <sticky id="sticky"/>

    <el-dialog 
      title="提示"
      :visible.sync="this.$store.state.askShowCtrl"
      width="30%"
      :before-close="handleClose"
      >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="this.askUnShow">取 消</el-button>
        <el-button type="primary" @click="this.askUnShow">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 这个是提问按钮的dialog,通过全局states控制 -->
  </div>
</template>

<script>
  import mycontent from './content/content'
  import sticky from './sticky/sticky'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
      mycontent,
      sticky
    },

    computed: {},

    beforeMount() {},

    mounted() {

    },

    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
      },
      askUnShow(){
        this.$parent.$parent.$children[0].$children[0].$refs.nav.style.paddingRight = "16px"
        this.$store.state.askShowCtrl = false
      },
    },

    watch: {}

  }

</script>
<style lang='css' scoped>
#main {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}

#mycontent {
  background-color: #fff;
  margin-right: 10px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
  border-radius: 2px;
}
</style>