<template>
  <div id="main">
    <mycontent id="mycontent"/>
    <sticky id="sticky"/>

    <el-dialog 
      title="提问"
      :visible.sync="this.$store.state.askShowCtrl"
      width="40%"
      :before-close="handleClose"
      >

      <span slot="footer" class="dialog-footer">
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
      handleClose() {
        this.$store.state.askShowCtrl = false
      },
      askUnShow(){ //这个方法写的有点天才
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