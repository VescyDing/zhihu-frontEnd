<template>
    <div id="main">
        <div class="mycontent">
            <div class="ProfileHeader-userCover">
            </div>
            <div class="ProfileHeader-main">
                <img class="avatar" :src="avatar"/>
                <div class="ProfileHeader-content">
                    <div class="ProfileHeader-contentHead">
                        <span class="ProfileHeader-name">{{userData.name}}</span>
                        <span class="ProfileHeader-headline">{{userData.intro}}</span>
                    </div>
                    <div class="ProfileHeader-contentBody">
                        <div class="ProfileHeader-detail">
                            <div class="ProfileHeader-detailItem">
                                <span class="ProfileHeader-detailLabel">所在行业</span>
                                <div class="ProfileHeader-detailValue">
                                    <span>{{userData.intro==''?'暂无信息':userData.intro}}</span>
                                </div>
                            </div>
                            <div class="ProfileHeader-detailItem">
                                <span class="ProfileHeader-detailLabel">职业经历</span>
                                <div class="ProfileHeader-detailValue">
                                    <span>{{userData.job==''?'暂无信息':userData.job}}</span>
                                </div>
                            </div>
                            <div class="ProfileHeader-detailItem">
                                <span class="ProfileHeader-detailLabel">教育经历</span>
                                <div class="ProfileHeader-detailValue">
                                    <span>{{userData.education==''?'暂无信息':userData.education}}</span>
                                </div>
                            </div>
                            <div class="ProfileHeader-detailItem">
                                <span class="ProfileHeader-detailLabel">居住地</span>
                                <div class="ProfileHeader-detailValue">
                                    <span>{{userData.area==''?'暂无信息':'现居'+userData.area}}</span>
                                </div>
                            </div>
                            <div class="ProfileHeader-detailItem">
                                <span class="ProfileHeader-detailLabel">知龄</span>
                                <div class="ProfileHeader-detailValue">
                                    <span>{{timeInterval(Date.now(), userData.creatTime, true)}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex">
            <div class="Profile-mainColumn">
                <el-tabs v-model="activeName"  style="margin-left: 14px;margin-right: 14px" @tab-click="handleClick">
                    <el-tab-pane label="回答" name="first" >
                        <div class="Profile-answers">
                            <div class="List-header"><span style="margin: 0">我的回答</span></div>
                            <div style="width: 100%;height: 100%;text-align: center;margin-top: 25px">
                                <span class="nodataicon">暂无回答</span>
                                <br>
                                <span class="nodataicon" style="font-size: 24px">不妨吃点东西</span>
                                <br>
                                <i class="el-icon-tableware nodataicon" style="color: #ffcf00"></i>
                                <i class="el-icon-cold-drink nodataicon" style="color: #43d480"></i>
                                <i class="el-icon-milk-tea nodataicon" style="color: #0084ff"></i>
                                <i class="el-icon-ice-drink nodataicon" style="color: #5478f0"></i>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="提问" name="second">
                        <div class="Profile-answers">
                            <div class="List-header"><span style="margin: 0">我的提问</span></div>
                            <div style="width: 100%;height: 100%;text-align: center;margin-top: 25px">
                                <span class="nodataicon">暂无提问</span>
                                <br>
                                <span class="nodataicon" style="font-size: 24px">不妨吃点东西</span>
                                <br>
                                <i class="el-icon-tableware nodataicon" style="color: #ffcf00"></i>
                                <i class="el-icon-cold-drink nodataicon" style="color: #43d480"></i>
                                <i class="el-icon-milk-tea nodataicon" style="color: #0084ff"></i>
                                <i class="el-icon-ice-drink nodataicon" style="color: #5478f0"></i>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="动态" name="third">锐意开发中！<i class="el-icon-brush"></i></el-tab-pane>
                    <el-tab-pane label="视频" name="five">锐意开发中！<i class="el-icon-brush"></i></el-tab-pane>
                    <el-tab-pane label="专栏" name="six">锐意开发中！<i class="el-icon-brush"></i></el-tab-pane>
                    <el-tab-pane label="想法" name="seven">锐意开发中！<i class="el-icon-brush"></i></el-tab-pane>
                    <el-tab-pane label="更多" name="eight">锐意开发中！<i class="el-icon-brush"></i></el-tab-pane>
                </el-tabs>
            </div>
            <div class="Profile-sideColumn">
                <div class="Card">
                    <div class="CreatorEntrance-hint">
                        <img class="CreatorEntrance-image" :src="czzzx">
                        <div class="CreatorEntrance-text">
                            <div class="CreatorEntrance-title">创作者中心
                                <span class="css-605fnf">Lv 999</span>
                                <svg class="Zi Zi--ArrowRight CreatorEntrance-arrow" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class="CreatorEntrance-entranceMessage">查看详情</div>
                        </div>
                    </div>
                    <div class="ProfileSideCreator-analytics">
                        <div class="ProfileSideCreator-readCountItem">
                            <div class="ProfileSideCreator-readCountTitle">
                                阅读总数
                            </div>
                            <div class="ProfileSideCreator-readCountNumber">
                                {{userData.visit}}
                            </div>
                                <div class="css-u2c28s">
                                    <span class="css-1086365">系统排名</span>
                                    <span class="css-1gqd0v0">---</span>
                                </div>
                        </div>
                        <div class="ProfileSideCreator-readCountItem" style="border-right: 0">
                            <div class="ProfileSideCreator-readCountTitle">
                                获赞总数
                            </div>
                            <div class="ProfileSideCreator-readCountNumber">
                                {{userData.stars}}
                            </div>
                            <div class="css-u2c28s">
                                <span class="css-1086365">系统排名</span>
                                <span class="css-1gqd0v0">---</span>
                            </div>
                        </div>
                    </div>
                    <div class="css-rswm4q"><a href="/creator/explore/wall-e" target="_blank" class="css-qx5les">瓦力保镖为你的创作提供持续保护<span style="display: inline-flex; align-items: center;">​<svg width="17" height="17" viewBox="0 0 16 16" class="css-14gt3bc" fill="currentColor"><path d="M8 3l.737.339.428.187.377.158.326.127c.15.055.282.1.395.133.55.161 1.297.157 2.237-.014l-.002 3.784c0 3.07-2.52 4.76-4.498 5.286-1.977-.527-4.498-2.216-4.498-5.286L3.5 3.93c.94.17 1.686.175 2.237.014C6.187 3.812 6.941 3.497 8 3zm2.38 3.066L7.599 8.834 6.32 7.566a.4.4 0 0 0-.554.554l1.55 1.55a.5.5 0 0 0 .568 0l3.05-3.05a.4.4 0 0 0-.554-.554z"></path></svg></span></a></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "profile",
        data () {
            return {
                avatar: require('../../../assets/img/big_avatar.jpg'),
                czzzx: require('../../../assets/img/czzzx.png'),
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
                activeName: 'first',
            }
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
            handleClick(){

            },
            timeInterval(Old, New, isHans){
                Old=new Date(Old);
                New=new Date(New);
                let time=(Old.getTime()-New.getTime())/(24*60*60*1000);
                let day=Math.floor(time);
                time=(time-day)*24;
                let hour=Math.floor(time);
                time=(time-hour)*60;
                let minute=Math.floor(time);
                time=(time-minute)*60;
                let second=Math.floor(time);
                if (isHans){
                    if (day>1){
                        return day + '天'
                    } else if (hour>1) {
                        return hour + '小时'
                    } else if (minute>1) {
                        return minute + '分钟'
                    } else {
                        return second + '秒'
                    }
                } else {
                    if (day>1){
                        return day + 'days'
                    } else if (hour>1) {
                        return hour + 'hours'
                    } else if (minute>1) {
                        return minute + 'minutes'
                    } else {
                        return second + 'seconds'
                    }
                }
            }
        },
    }
</script>

<style scoped>
    #main {
        width: 1000px;
        margin: 0 auto;
    }
    .mycontent {
        width: 1000px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-sizing: border-box;
        border-radius: 2px;
        height: 100%;
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
    .ProfileHeader-userCover {
        height: 132px;
        background-color: #999999;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }
    .ProfileHeader-main {
        position: relative;
        margin: 0 20px 24px;
    }
    .ProfileHeader-content {
        padding-top: 16px;
        padding-left: 32px;
        border-left: 164px solid transparent;
    }
    .ProfileHeader-contentHead {
        position: relative;
        padding-right: 106px;
        margin-bottom: 16px;
    }
    .ProfileHeader-contentBody {
        position: relative;
        width: 524px;
        overflow: hidden;
    }
    .ProfileHeader-title {
        -webkit-box-flex: 1;
        -ms-flex: 1 1;
        flex: 1 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .ProfileHeader-name {
        font-size: 26px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 30px;
    }
    .ProfileHeader-headline {
        margin-left: 12px;
        font-size: 18px;
        white-space: nowrap;
    }
    .ProfileHeader-detail {
        width: 100%;
        font-size: 14px;
        line-height: 1.8;
        color: #1a1a1a;
    }
    .ProfileHeader-detailItem {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 18px;
    }
    .ProfileHeader-detailLabel {
        width: 60px;
        margin-right: 37px;
        font-weight: 600;
        font-synthesis: style;
    }
    .ProfileHeader-detailValue {
        -webkit-box-flex: 1;
        -ms-flex: 1 1;
        flex: 1 1;
        overflow: hidden;
    }
    .Profile-mainColumn {
        width: 694px;
        min-height: 476px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-sizing: border-box;
        border-radius: 2px;
    }
    .Profile-sideColumn {
        width: 306px;
        color: #646464;
    }
    .Card {
        margin-left: 10px;
        margin-bottom: 10px;
        background: #fff;
        overflow: hidden;
        border-radius: 2px;
        -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 220px;
        padding: 10px;
    }
    .List-header {
        font-weight: bold;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 50px;
        margin: 0 20px;
        border-bottom: 1px solid #f6f6f6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .CreatorEntrance-hint {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 56px;
        padding: 0 20px 0 4px;
    }
    .CreatorEntrance-image {
        height: 40px;
        width: 80px;
        display: inline-block;
    }
    .CreatorEntrance-text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: inline-block;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-left: 6px;
        line-height: 16px;
    }
    .CreatorEntrance-title {
        color: #1a1a1a;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
    }
    .CreatorEntrance-entranceMessage {
        color: #999;
        font-size: 12px;
        margin-top: 2px;
    }
    .css-605fnf {
        box-sizing: border-box;
        min-width: 0px;
        color: rgb(0, 132, 255);
        margin: 0px 0px 0px 8px;
    }
    .CreatorEntrance-arrow {
        color: #8590a6;
        fill: currentcolor;
        width: 24px;
        height: 24px;
        float: right;
        margin-left: 15px;
    }
    .ProfileSideCreator-analytics {
        border-top: 1px solid #f6f6f6;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 20px 0;
        width: 100%;
    }
    .ProfileSideCreator-readCountItem {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-right: 1px solid #ebebeb;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0;
        flex: 1 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .ProfileSideCreator-readCountTitle {
        color: #8590a6;
        font-size: 12px;
        line-height: 22px;
    }
    .ProfileSideCreator-readCountNumber {
        color: #444;
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
        font-synthesis: style;
    }
    .css-u2c28s {
        box-sizing: border-box;
        min-width: 0px;
        display: flex;
        font-size: 12px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: 0px;
    }
    .css-1086365 {
        box-sizing: border-box;
        min-width: 0px;
        color: rgb(99, 133, 166);
        margin: 0px;
    }
    .css-1gqd0v0 {
        box-sizing: border-box;
        min-width: 0px;
        font-weight: 600;
        margin: 0px 0px 0px 4px;
    }
    .css-rswm4q {
        box-sizing: border-box;
        min-width: 0px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0px;
    }
    .css-qx5les {
        box-sizing: border-box;
        min-width: 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12px;
        color: rgb(133, 144, 166);
        padding-top: 12px;
        padding-bottom: 12px;
        margin: 0px;
        border-top: 1px solid rgb(246, 246, 246);
        border-color: rgb(246, 246, 246);
        text-decoration:none;
    }
    .nodataicon {
        margin-top: 10px;
        font-size: 50px;
        color: #8590a6;
    }
</style>