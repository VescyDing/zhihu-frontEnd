<template>
    <div>
        <div style="width: 120%;transform: translate(-8%, -3%)">
            <div class="QuestionHeader">
                <div class="QuestionHeader-content">
                    <div class="QuestionHeader-tags" v-if="dynamicTags[0] != ''">
                        <el-tag
                                :key="tag"
                                v-for="tag in dynamicTags"
                                :disable-transitions="false"
                                effect="dark"
                                class="questionTag"
                                style="border: 0"
                        >
                            {{tag}}
                        </el-tag>
                    </div>
                </div>
                <div style="width: 1000px;margin: 0 auto;position: relative">
                    <div class="QuestionHeader-main">
                        <img class="avatar" :src="avatar" @click="goDetail(creatorData._id)"/>
                        {{creatorData.name}} 的提问:
                        <div class="QuestionHeader-title">{{selectedQues.title}}</div>
                        <div class="QuestionHeader-detail" style="color: #666666" v-html="selectedQues.content"></div>
                        <el-button size="small" type="primary" @click="collectAdd(userData, selectedQues._id)"
                                   :disabled="collected">{{collected?'已关注':'关注问题'}}
                        </el-button>
                        <el-button size="small" :icon="addingAnswer?'el-icon-close':'el-icon-edit'"
                                   @click="()=>this.addingAnswer = !this.addingAnswer">{{addingAnswer?'关闭':'写回答'}}
                        </el-button>
                        <el-button size="small" icon="el-icon-share">邀请回答</el-button>
                        <button style="margin-left: 35px" type="button"
                                class="Button Button--plain Button--withIcon Button--withLabel"><span
                                style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Share Button-zi"
                                                                                         fill="currentColor"
                                                                                         viewBox="0 0 24 24"
                                                                                         width="1.2em" height="1.2em"><path
                                d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                                fill-rule="evenodd"></path></svg></span>分享
                        </button>
                        <button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span
                                style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Report Button-zi"
                                                                                         fill="currentColor"
                                                                                         viewBox="0 0 24 24"
                                                                                         width="1.2em" height="1.2em"><path
                                d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z"
                                fill-rule="evenodd"></path></svg></span>举报
                        </button>
                        <button aria-label="更多" type="button" id="Popover7-toggle" aria-haspopup="true"
                                aria-expanded="false" aria-owns="Popover7-content"
                                class="Button Button--plain Button--withIcon Button--iconOnly"><span
                                style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Dots Button-zi"
                                                                                         fill="currentColor"
                                                                                         viewBox="0 0 24 24"
                                                                                         width="1.2em" height="1.2em"><path
                                d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                fill-rule="evenodd"></path></svg></span></button>
                    </div>
                    <div class="QuestionHeader-side">
                        <div class="QuestionFollowStatus-counts">
                            <div style="width: 74px;display: inline-block;border-right: 1px solid #EBEBEB">
                                <div style="font-size: 14px;color: #8590a6;">
                                    浏览量
                                </div>
                                <div class="NumberBoard-itemValue">
                                    {{selectedQues.visitCount}}
                                </div>
                            </div>
                            <div style="width: 74px;display: inline-block;border-right: 1px solid #EBEBEB">
                                <div style="font-size: 14px;color: #8590a6;">
                                    收藏数
                                </div>
                                <div class="NumberBoard-itemValue">
                                    {{selectedQues.startsCount}}
                                </div>
                            </div>
                            <div style="width: 74px;display: inline-block;border-right: 1px solid #EBEBEB">
                                <div style="font-size: 14px;color: #8590a6;">
                                    回答数
                                </div>
                                <div class="NumberBoard-itemValue">
                                    {{selectedQues.answerCount}}
                                </div>
                            </div>
                            <div style="width: 74px;display: inline-block;">
                                <div style="font-size: 14px;color: #8590a6;">
                                    评论数
                                </div>
                                <div class="NumberBoard-itemValue">
                                    {{selectedQues.commentCount}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="Question-main">
            <div class="Question-mainColumn">
                <div class="answerAdd Block" v-show='addingAnswer'>
                    <div class="AnswerAdd-header">
                        <img class="avatar" style="height: 38px;width: 38px;" :src="avatar"/>
                        <div class="AuthorInfo-head">
                            {{userData.name}}
                        </div>
                        <div class="AnswerAdd-toggleAnonymous Button " style="padding-right: 0">
                            <el-checkbox v-model="checked" style="margin-right: 10px"></el-checkbox>
                            使用匿名身份回答
                            <el-popover
                                    placement="top-start"
                                    title="什么是匿名身份？"
                                    width="200"
                                    trigger="hover">
                                <div style="margin-left: 20px">
                                    <span style="font-weight: bold">使用匿名身份后：</span>
                                    <br>
                                    <ul>
                                        <li> 提问、回答、赞同、关注会显示为匿名
                                        </li>
                                        <li> 除提问者本人，不能匿名编辑问题
                                        </li>
                                        <li> 不能邀请别人回答问题
                                        </li>
                                        <li> 不能使用视频功能
                                        </li>
                                    </ul>
                                </div>
                                <i class="el-icon-question" slot="reference"></i>
                            </el-popover>
                        </div>
                    </div>
                    <div class="smallEditor">
                        <div id="editor">
                        </div>
                        <el-button type="primary" @click="postAnswer"
                                   style="position: absolute;bottom: 10px;right: 30px;z-index: 999999">提交回答
                        </el-button>
                    </div>
                    <div class="AnswerForm-footerContent">
                        <i class="el-icon-info"></i>
                        <span style="margin: 0 10px">创作声明：无声明​</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="QuestionMainAction Block">
                    查看全部 {{selectedQues.answerCount}} 个回答
                </div>
                <div class="AnswerCard Block" v-for="item in answerList">
                    <div class="answer-head">
                        <img class="avatar" style="display: inline-block;height: 38px;width: 38px;" :src="avatar" @click="goDetail(item.creator)"/>
                        <div style="display: inline-block">
                            <div class="AuthorInfo-head">
                                {{item.creatorName}}
                                &nbsp;
                                <a href="#" target="_blank" class="css-1pc1mic" data-tooltip="已认证的个人"
                                   aria-label="已认证的个人"><span class="css-18biwo">​<svg viewBox="0 0 24 24" width="18"
                                                                                      height="18"><svg
                                        viewBox="0 0 24 24" x="-3" y="-3" fill="#FFFFFF" width="30" height="30"><path
                                        d="M3.56231227,13.8535307 C2.40051305,12.768677 2.41398885,11.0669203 3.59484487,9.99979213 L3.59222085,9.99654885 C4.26730143,9.45036719 4.79446755,8.21005186 4.7184197,7.34453784 L4.72305873,7.34412719 C4.66942824,5.75539997 5.8824188,4.56066914 7.47188965,4.64242381 L7.47229112,4.6386236 C8.33515314,4.72977993 9.58467253,4.22534048 10.1426329,3.55925173 L10.1462611,3.56228565 C11.2316055,2.40008701 12.9353108,2.41394456 14.0015072,3.59634088 L14.0047263,3.59374004 C14.5498229,4.26841874 15.7896857,4.79521622 16.6545744,4.71844347 L16.6549836,4.72304294 C18.245027,4.66894057 19.4396947,5.88213996 19.3575031,7.47241135 L19.3623099,7.47292747 C19.2704388,8.3358681 19.7742711,9.58421483 20.4407199,10.1424506 L20.437686,10.1460789 C21.5997217,11.2312209 21.5860695,12.9345218 20.4042441,14.0007396 L20.4072865,14.0045125 C19.7325967,14.5495925 19.2055209,15.7896954 19.2815865,16.6561959 L19.2770449,16.6565978 C19.3315454,18.2453037 18.1173775,19.4393568 16.5274188,19.3571512 L16.5269029,19.3619539 C15.6647098,19.270083 14.415408,19.7741709 13.8573671,20.4403558 L13.8537409,20.4373235 C12.76842,21.5995708 11.0650432,21.5864553 9.99899434,20.4039226 L9.99527367,20.406923 C9.45025436,19.7323399 8.21017638,19.2051872 7.34461983,19.2812352 L7.344304,19.2776405 C5.75448683,19.3312904 4.55977145,18.1170085 4.64254978,16.527117 L4.63769921,16.5265942 C4.72957031,15.6644394 4.22547659,14.4151814 3.55928015,13.8571569 L3.56231227,13.8535307 Z"></path></svg><path
                                        d="M2.63951518,13.3895441 C3.70763333,14.2842292 4.44777637,16.1226061 4.30075305,17.5023312 L4.32211542,17.3063047 C4.17509209,18.6910561 5.17786655,19.7063729 6.5613937,19.5844846 L6.364106,19.6008202 C7.75140298,19.4789319 9.57474349,20.2554985 10.4468305,21.3349009 L10.3224262,21.1803415 C11.1982831,22.2647703 12.6257916,22.2723098 13.5167278,21.2079863 L13.3898102,21.3600325 C14.2845162,20.2919393 16.1229361,19.5518136 17.5026934,19.6988334 L17.3054057,19.6774716 C18.6914461,19.8244915 19.7067866,18.8217404 19.5836389,17.4395022 L19.6012314,17.6367853 C19.4793403,16.2482641 20.255925,14.4249662 21.3353526,13.5528995 L21.1807897,13.677301 C22.2639871,12.8014646 22.2727834,11.3739894 21.2084351,10.483074 L21.3604848,10.6099886 C20.2923667,9.71530351 19.5522236,7.87818322 19.6992469,6.49720154 L19.6778846,6.69448464 C19.8249079,5.30847665 18.8221335,4.2944164 17.4386063,4.41630468 L17.635894,4.39871256 C16.248597,4.52185742 14.4252565,3.74529084 13.5531695,2.66588842 L13.6775738,2.81919121 C12.8017169,1.73601905 11.3742084,1.72722299 10.4832722,2.79154644 L10.6101898,2.63950024 C9.71548377,3.70759343 7.87706394,4.44771919 6.49730661,4.30195588 L6.69459432,4.32206116 C5.30855394,4.17504128 4.29447,5.17904888 4.41636114,6.56128713 L4.3987686,6.36400404 C4.52065973,7.75126861 3.74407501,9.57456653 2.66464737,10.4478898 L2.81921035,10.3222318 C1.73601288,11.1993248 1.72721662,12.6255433 2.79156494,13.5164587 L2.63951518,13.3895441 Z"
                                        fill="#0084FF"></path><svg class="Zi Zi--Check" fill="#fff" x="6" y="6"
                                                                   viewBox="0 0 24 24" width="12" height="12"><path
                                        d="M10.229 17.516c-.318.327-.75.484-1.199.484-.453 0-.884-.16-1.202-.488l-4.335-4.47a1.77 1.77 0 0 1 .007-2.459 1.663 1.663 0 0 1 2.397.01l3.137 3.246 9.072-9.329a1.662 1.662 0 0 1 2.397 0c.663.681.663 1.786 0 2.466L10.23 17.516z"
                                        fill-rule="evenodd"></path></svg></svg></span></a>
                            </div>
                            <div class="AuthorInfo-detail">
                                {{item.creatorJob}}
                            </div>
                        </div>
                    </div>
                    <div class="Button" style="padding: 0;margin-left: 0">
                        {{item.startsCount}} &nbsp; 人赞同了该回答
                    </div>
                    <div style="color: #666666;margin: 10px auto" v-html="item.content">
                    </div>
                    <div class="Button" style="padding: 0;margin-left: 0">
                        编辑于 &nbsp; {{item.creatTime}}
                    </div>
                    <div class="ContentItem-actions">
                        <el-button style="color: #0084ff;background: rgba(0,132,255,.1);border: 0" size="mini"
                                   type="primary"
                                   @click="startsOption({startsCount: item.startsCount+1, _id: item._id})"
                                   icon="el-icon-caret-top">赞同 &nbsp; {{item.startsCount}}
                        </el-button>
                        <el-button style="margin-right: 40px;color: #0084ff;background: rgba(0,132,255,.1);border: 0"
                                   size="mini" type="primary"
                                   @click="startsOption({startsCount: item.startsCount-1, _id: item._id})"
                                   icon="el-icon-caret-bottom"></el-button>
                        <el-button size="mini" style="font-size: 14px;color: #8590a6" type="text"
                                   @click="showComment(item._id, item.commentCount)"
                                   icon="el-icon-chat-dot-round">{{item.commentCount}} &nbsp; 条评论
                        </el-button>
                        <el-button size="mini" style="font-size: 14px;color: #8590a6" type="text" icon="el-icon-share">
                            分享
                        </el-button>
                        <el-button size="mini" style="font-size: 14px;color: #8590a6" type="text"
                                   icon="el-icon-star-off">收藏
                        </el-button>
                        <el-button size="mini" style="font-size: 14px;color: #8590a6" type="text" icon="el-icon-s-flag">
                            喜欢
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="Question-sideColumn Block">

            </div>
            <el-dialog
                    :visible.sync="commentShow"
                    width="688px"
                    class="comment"
            >
                <template slot="title">
                    <span style="font-weight: bold"> {{selectedAnswerCommentCount}}&nbsp; 条评论</span>
                </template>
                <comment :answer-id="selectedAnswerId"/>
                <span slot="footer" class="dialog-footer">
                    <el-input v-model="commentVal" style="height: 38px;width: 574px; float: left;" placeholder="富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善"></el-input>
                    <el-button type="primary" @click="postComment">
                        发 布
                    </el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import wangEditor from "wangeditor";
    import comment from "../comment/index"

    export default {
        name: "question",
        data() {
            return {
                avatar: require('../../assets/img/avatar.jpg'),
                selectedQues: {
                    _id: null,
                    title: null,
                },
                creatorData: {
                    name: null,
                    collect: [],
                },
                dynamicTags: [],
                collected: false,
                userData: {
                    name: null
                },
                checked: false,
                addingAnswer: false,
                wangEditor,
                E: null,
                editor: null,
                answerList: [],
                commentShow: false,
                selectedAnswerId: null,
                selectedAnswerCommentCount: null,
            }
        },
        computed: {
            commentVal: {
                get(){
                    return this.$store.getters['commentVal']
                },
                set(val){
                    return this.$store.commit('commentVal', val)
                }
            },
            commentReload: {
                get(){
                    return this.$store.getters['commentReload']
                },
                set(val){
                    return this.$store.commit('commentReload', val)
                }
            },
        },
        watch: {
            commentReload(newVal, oldVal){
                if (newVal){
                    this.getComment(this.selectedAnswerId).then(_=>{
                        this.commentShow = false
                    })
                }
            }
        },
        components: {
            comment
        },
        mounted() {
            console.log(this.$cookies.get('userData'));
            if (this.$cookies.get('userData')) {
                this.$axios.get('/user', {_id: this.$cookies.get('userData').userData._id}, res => {
                    this.$cookies.set('userData', res.data)
                    console.log(this.$cookies.get('userData'));
                    this.userData = res.data.userData
                    this.init()
                })
            } else {
                return this.$router.go(-1)
            }

        },
        methods: {
            init() {
                if (this.$cookies.get('selectedQues')) {
                    this.selectedQues = this.$cookies.get('selectedQues')
                    //获取问题list
                    this.$axios.get('/answer', {questionId: this.$cookies.get('selectedQues')._id}, res => {
                        this.answerList = []
                        this.answerList = res.data.answerList
                    })

                    this.E = this.wangEditor
                    this.editor = new this.E('#editor')
                    this.editor.create()
                    this.$axios.get('/user', {_id: this.selectedQues.creator}, res => {
                        this.creatorData = res.data.userData
                        this.selectedQues = this.$cookies.get('selectedQues')
                        this.dynamicTags = JSON.parse(this.selectedQues.classify[0])
                        this.userData.collect = JSON.parse(this.userData.collect[0])
                        console.log(this.dynamicTags,  this.userData.collect);
                        for (let i in this.userData.collect) {
                            if (this.userData.collect[i] == this.selectedQues._id) {
                                this.collected = true
                            }
                        }
                        this.viewAdd(this.selectedQues)
                    })
                } else {
                    this.$router.push('/')
                }
            },
            viewAdd(data) {
                this.$axios.put('/question/visitCount', {
                    visitCount: data.visitCount + 1,
                    _id: data._id,
                }, res => {

                })
            },
            collectAdd(userData, questionId) {
                let newData = userData.collect
                newData.push(questionId)
                let data = {
                    collect: JSON.stringify(newData),
                    _id: userData._id,
                    questionId,
                }
                this.$axios.post('/user/collect', data, res => {
                    this.selectedQues = res.data.questionNewData
                    this.selectedQues.startsCount += 1
                    this.collected = true
                })
            },
            postAnswer() {
                let postData = {
                    targetQuestion: this.selectedQues._id,
                    content: this.editor.txt.html(),
                    creator: this.checked ? null : this.userData._id,
                    creatorName: this.checked ? '匿名' : this.userData.name,
                    creatorJob: this.checked ? '未知' : this.userData.job,
                }
                this.$axios.post('/answer', {
                    questionId: this.selectedQues._id,
                    postData: JSON.stringify(postData)
                }, res => {
                    if (res.status = 200) {
                        this.$message({
                            showClose: true,
                            message: res.data.message,
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            showClose: true,
                            message: '出现未知错误，回答失败！',
                            type: 'error'
                        });
                    }
                    window.location.reload(true)
                    this.selectedQues.answerCount += 1
                    this.$cookies.set('selectedQues', this.selectedQues)

                })
            },
            startsOption(data) {
                this.$axios.put('/answer/startsCount', {
                    startsCount: data.startsCount,
                    _id: data._id,
                }, res => {
                    this.init()
                })
            },
            showComment(id, count) {
                this.selectedAnswerId = id
                this.selectedAnswerCommentCount = count
                this.getComment(this.selectedAnswerId).then(_=>{
                    this.commentShow = true
                })
            },
            postComment(){
                if (this.$store.getters['commentVal'] == ''){
                    this.$message({
                        showClose: true,
                        message: '评论不能为空！',
                        type: 'error'
                    });
                    return
                }
                let postData = {
                    targetAnswer: this.selectedAnswerId,
                    content: this.$store.getters['commentVal'],
                    creator: this.userData._id,
                    creatorName: this.userData.name,
                    replierName: '',
                }
                this.$axios.post('/comment', {
                    postData: JSON.stringify(postData),
                    answerId: this.selectedAnswerId
                }, res => {
                    if (res.status = 200) {
                        this.$message({
                            showClose: true,
                            message: res.data.message,
                            type: 'success'
                        });
                        this.$store.commit('commentVal', '')
                        this.getComment(this.selectedAnswerId).then(_=>{
                            this.init()
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '出现未知错误，评论失败！',
                            type: 'error'
                        });
                    }
                })
            },
            getComment(answerId){
                const that = this
                let promise = new Promise(function (resolve, reject) {
                    that.$axios.get('/comment', {
                        answerId
                    }, res => {
                        that.$store.commit('commentList', res)
                        resolve()
                    })
                })
                return promise
            },
            goDetail(id){
                this.$router.push({
                    name: 'profile',
                    params: {
                        tagerId: id
                    }
                })
            },
        },

    }
</script>

<style scoped>
    .QuestionHeader {
        position: relative;
        min-width: 1032px;
        padding: 25px 0;
        overflow: hidden;
        background: #fff;
        -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    }

    .QuestionHeader-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 1000px;
        height: 100%;
        padding: 0 16px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .QuestionHeader-main {
        width: 667px;
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0 auto;
        display: inline-block;
    }

    .QuestionHeader-side {
        width: 296px;
        text-align: center;
        display: inline-block;
        height: 215px;
        position: absolute;
        top: 0px;
        right: 10px;
    }

    .avatar {
        width: 28px;
        height: 28px;
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
    }

    .QuestionHeader-tags {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #666;
    }

    .QuestionHeader-title {
        margin-top: 24px;
        margin-bottom: 4px;
        font-size: 22px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 32px;
        color: #1a1a1a;
    }

    .QuestionHeader-detail {
        font-weight: normal !important;
        margin-bottom: 20px;
    }

    .QuestionFollowStatus-counts {
    }

    .NumberBoard-itemValue {
        display: inline-block;
        font-size: 18px;
        color: #1a1a1a;
        font-weight: 600;
        font-synthesis: style;
    }

    .Button--withIcon.Button--link, .Button--withIcon.Button--plain {
        padding: 0;
    }

    .Button--link, .Button--plain {
        height: auto;
        padding: 0;
        line-height: inherit;
        background-color: transparent;
        border: none;
        border-radius: 0;
    }

    .Button {
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 32px;
        color: #8590a6;
        text-align: center;
        cursor: pointer;
        background: none;
        border-radius: 3px;
        margin-left: 15px;
    }

    .Question-main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin: 0 auto;
        padding: 0 16px;
        width: 1000px;
        min-height: 100vh;
    }

    .Block {
        background: #fff;
        -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        border-radius: 2px;
    }

    .Question-mainColumn {
        width: 694px;
        padding-bottom: 20px;
    }

    .Question-sideColumn {
        width: 296px;
    }

    .QuestionMainAction {
        line-height: 50px;
        color: #8590a6;
        text-align: center;
    }

    .AnswerCard {
        width: 694px;
        padding: 16px 20px;
        margin-top: 10px;
    }

    .AuthorInfo-head {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 15px;
        line-height: 1.1;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        font-weight: bold;
    }

    .AuthorInfo-detail {
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #646464;
    }

    .ContentItem-actions {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #646464;
        background: #fff;
        clear: both;
    }

    .answerAdd {
        width: 100%;
        margin-bottom: 10px;
    }

    .AnswerAdd-header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 16px 20px;
        border-bottom: 1px solid #EBEBEB;
    }

    .AuthorInfo-head {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 15px;
        line-height: 1.1;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }

    .AnswerAdd-toggleAnonymous {
        margin-left: auto;
        padding-left: 12px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        line-height: 38px;
    }

    #editor {
        width: 100% !important;
    }

    .AnswerForm-footerContent {
        border-top: 1px solid #ebebeb;
        font-size: 14px;
        line-height: 60px;
        color: #606a80;
        height: 60px;
        padding-left: 20px;
    }

    .smallEditor {
        position: relative;
    }

    #editor {
        color: #666;
    }

</style>