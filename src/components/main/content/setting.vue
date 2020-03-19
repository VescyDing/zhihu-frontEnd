<template>
    <div id="main">
        <div id="mycontent">
            <div class="ProfileHeader-main">
                <img class="avatar" :src="avatar"/>
                <div class="ProfileHeader-content">
                        <el-popover
                                placement="bottom-start"
                                title="修改您的用户名："
                                width="600"
                                trigger="hover"
                                >
                            <el-form>
                                <el-input v-model="userData.name" placeholder="请输入新的用户名"></el-input>
                                <el-button @click="updata('name')" type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-edit">修改</el-button>
                            </el-form>
                            <el-button class="Fullname" type="text" slot="reference">{{userData.name}}</el-button>
                        </el-popover>
                    <div class="Field">
                        <h3 class="Field-label">性别</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.gender">
                                <span>{{userData.gender==0?'保密':(userData.gender==1?'男':'女')}}</span>
                                <el-button @click="()=>{this.inputShowCtrl.gender = true}" type="text" style="color: #175199;font-size: 15px" size="small" icon="el-icon-edit">{{userData.gender!=0?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.gender">
                            <div style="display: block">
                                <el-radio size="medium" v-model="userData.gender" label="0">保密 ⚥</el-radio>
                                <el-radio size="medium" v-model="userData.gender" label="1">男 ♂</el-radio>
                                <el-radio size="medium" v-model="userData.gender" label="2">女 ♀</el-radio>
                            </div>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('gender')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.gender = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                    <div class="Field">
                        <h3 class="Field-label">一句话介绍</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.intro">
                            <span>{{userData.intro==''?'这个人很懒，什么都没有写。':userData.intro}}</span>
                            <el-button @click="()=>{this.inputShowCtrl.intro = true}" type="text" size="small" style="color: #175199;font-size: 15px" icon="el-icon-edit">{{userData.intro!=''?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.intro">
                            <el-input v-model="userData.intro" placeholder="介绍你自己吧"></el-input>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('intro')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.intro = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                    <div class="Field">
                        <h3 class="Field-label">居住地</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.area">
                            <span>{{userData.area==''?'请添加居住地':userData.area}}</span>
                            <el-button @click="()=>{this.inputShowCtrl.area = true}" type="text" size="small" style="color: #175199;font-size: 15px" icon="el-icon-edit">{{userData.area!=''?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.area">
                            <el-input v-model="userData.area" placeholder="请输入您的居住地"></el-input>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('area')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.area = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                    <div class="Field">
                        <h3 class="Field-label">所在行业</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.industry">
                            <span>{{userData.industry==''?'请填写行业信息':userData.industry}}</span>
                            <el-button @click="()=>{this.inputShowCtrl.industry = true}" type="text" size="small" style="color: #175199;font-size: 15px" icon="el-icon-edit">{{userData.industry!=''?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.industry">
                            <el-input v-model="userData.industry" placeholder="请输入您所在的行业"></el-input>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('industry')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.industry = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                    <div class="Field">
                        <h3 class="Field-label">职业经历</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.job">
                            <span>{{userData.industry==''?'请填写行业信息':userData.job}}</span>
                            <el-button @click="()=>{this.inputShowCtrl.job = true}" type="text" size="small" style="color: #175199;font-size: 15px" icon="el-icon-edit">{{userData.job!=''?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.job">
                            <el-input v-model="userData.job" placeholder="请输入您所在的行业"></el-input>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('job')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.job = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                    <div class="Field">
                        <h3 class="Field-label">教育经历</h3>
                        <div class="Field-content" v-if="!inputShowCtrl.education">
                            <span>{{userData.education==''?'添加教育经历':userData.education}}</span>
                            <el-button @click="()=>{this.inputShowCtrl.education = true}" type="text" size="small" style="color: #175199;font-size: 15px" icon="el-icon-edit">{{userData.education!=''?'修改':'填写'}}</el-button>
                        </div>
                        <div class="Field-content" v-if="inputShowCtrl.education">
                            <el-input v-model="userData.education" placeholder="请输入您的教育经历"></el-input>
                            <el-button type="primary" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-check" @click="updata('education')">确定</el-button>
                            <el-button @click="()=>{this.inputShowCtrl.education = false}" type="" style="font-size: 15px;margin-top: 10px" size="small" icon="el-icon-close">取消</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "setting",
        data () {
            return {
                avatar: require('../../../assets/img/big_avatar.jpg'),
                userData: {
                    account: null,
                    gender: null,
                    intro: "",
                    area: "",
                    industry: "",
                    job: "",
                    education: "",
                    collect: [],
                    focus: [],
                    stars: null,
                    visit: null,
                    creatTime: null,
                    _id: null,
                    name: null,
                },
                inputShowCtrl: {
                    gender: false,
                    job: false,
                    intro: false,
                    area: false,
                    industry: false,
                    education: false,
                }
            };
        },
        mounted() {
            if (this.$cookies.get('userData')){
                this.userData = this.$cookies.get('userData').userData
                console.log(this.$cookies.get('userData'))
            } else {
                this.$router.push('/login')
            }
        },
        methods: {
            updata(item){
                const that = this
                console.log(this.userData)
                this.$axios.put('/user', {
                    _id: this.userData._id,
                    [item]: this.userData[item]
                }, res => {
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
                        this.$cookies.set('userData', this.userData)
                    }
                })
                this.inputShowCtrl[item] = false
            }
        }
    }
</script>

<style scoped>
    #main {
        display: flex;
        width: 1000px;
        margin: 0 auto;
    }
    #mycontent {
        width: 1000px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-sizing: border-box;
        border-radius: 2px;
        height: 810px;
        margin-top: 20px;
    }
    .ProfileHeader-main {
        position: relative;
        margin: 0 20px 24px;
        height: calc(100% - 24px);
    }
    .avatar {
        position: absolute;
        top: -16px;
        left: 0;
        z-index: 1;
        height: 168px;
        width: 168px;
        border: 4px solid #fff;
        border-radius: 8px;
    }
    .ProfileHeader-content {
        padding-top: 16px;
        padding-left: 32px;
        border-left: 164px solid transparent;
        height: 100%;
    }
    .Fullname {
        font-size: 26px;
        font-weight: 600;
        font-synthesis: style;
        height: 30px;
        line-height: 30px;
    }
    .Field {
        padding: 30px 0;
        border-bottom: 1px solid #ebebeb;
    }
    .Field-label {
        position: absolute;
        font-size: 15px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 36px;
        color: #444;
    }
    .Field-content {
        padding: 0 64px 0 140px;
        line-height: 36px;
    }
    .Field-content span {
        margin-right: 20px;
    }
</style>