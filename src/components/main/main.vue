<template>
  <div id="main">
    <mycontent id="mycontent"/>
    <sticky id="sticky"/>

    <el-dialog 
      :visible.sync="$store.state.askShowCtrl"
      width="60%"
      class="questionAdd"
      >
      <span slot="title" style="font-size: 20px;">
                <img class="avatar" :src="avatar"/>
                <el-input v-model="input" style="width: calc(100% - 64px);" class="tiweninput" placeholder="写下你的问题，准确低描述问题更容易得到解答"></el-input>
                <div id="editor">
                  <p>输入问题背景、条件等详细信息（选填）</p>
              </div>
      </span>
      <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" @click="showInput">添加问题标签</el-button>

        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="this.askUnShow">发布问题</el-button>
          <el-button @click="() => this.$store.state.askShowCtrl = false">取消发布</el-button>
      </span>

    </el-dialog>
    <!-- 这个是提问按钮的dialog,通过全局states控制 -->
  </div>
</template>

<script>
  import mycontent from './content/content'
  import sticky from './sticky/sticky'

  import wangEditor from 'wangeditor'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        avatar: require('../../assets/img/avatar.jpg'),
        input: '',
        wangEditor,
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        E: null,
        editor: null,
      };
    },

    components: {
      mycontent,
      sticky,

    },

    computed: {},

    beforeMount() {},

    mounted() {
      this.E =  this.wangEditor
      this.editor = new this.E('#editor')
      this.editor.create()
    },

    methods: {
      async askUnShow(){ //这个方法写的有点天才
        this.$parent.$parent.$children[0].$children[0].$refs.nav.style.paddingRight = "16px"

        let postData = {
          classify: this.dynamicTags,
          title: this.input,
          content: this.editor.txt.html(),
          creator: this.$cookies.get('userData').userData._id
        }
        const that = this
        await this.$axios.post('/question', postData, res => {
          console.log(res);
          if (res.status != 200){
            that.$message({
              showClose: true,
              message: res.data.message,
              type: 'error'
            });
          } else {
            that.$message({
              showClose: true,
              message: res.data.message,
              type: 'success'
            });
          }
        })
        this.$store.state.askShowCtrl = false
        window.location.reload(true)
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        console.log(this.dynamicTags);
      }
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

  .avatar{
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }

  #editor {
    box-sizing: content-box;
  }

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>