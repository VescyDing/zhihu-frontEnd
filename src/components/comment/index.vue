<template>
    <div style="max-height: 666px;overflow-y: scroll">
        <div style="width: 100%;border-bottom: 1px solid #f6f6f6;margin-top: 15px" v-for="item in commentData">
            <img style="display: inline-block;margin-right: 10px;height: 24px;width: 24px;" :src="avatar"/>
            <div class="header">
                <span style="position: relative;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: 15px;
                    line-height: 24px">{{item.creatorName}}</span>
                <span style="position:absolute;right: 20px;top: 7px;color: #8590a6">{{timeInterval(item.creatTime, Date.now(), true)}}前</span>
            </div>
            <div class="content">
                {{item.content}}
            </div>
            <div class="option" style="position:relative;">
                <div class="optionItem" style="position:absolute;top: 2px" @click="startsOption({startsCount: item.startsCount+1, _id: item._id})">
                    <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Like" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="margin-right: 5px;"><path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"></path></svg></span>
                    <span style="color: #8590a6;font-size: 15px">{{item.startsCount}}</span>
                </div>
                <div style="margin-left: 45px" class="options">
                    <div class="optionItem">
                        <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Reply" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="margin-right: 5px;"><path d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"></path></svg></span>
                        <span style="color: #8590a6;font-size: 15px" @click="reply(item.creatorName)">回复</span>
                    </div>
                    <div class="optionItem" @click="startsOption({startsCount: item.startsCount-1, _id: item._id})">
                        <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Like" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="transform: rotate(180deg); margin-right: 5px;"><path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"></path></svg></span>
                        <span style="color: #8590a6;font-size: 15px">踩</span>
                    </div>
                    <div class="optionItem">
                        <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Like" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="transform: rotate(180deg); margin-right: 5px;"><path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"></path></svg></span>
                        <span style="color: #8590a6;font-size: 15px">举报</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        props: {
            answerId: {
                type: String,
                default: undefined, //必传
            }
        },
        data() {
            return {
                avatar: require('../../assets/img/avatar.jpg'),
                commentData: null,
            };
        },

        components: {},

        computed: {},

        mounted() {
            this.init()
        },
        computed: {
            commentList(){
                return this.$store.getters['commentList']
            }
        },
        watch: {
            commentList(newVal, oldVal){
                console.log(newVal);
                this.commentData = newVal.data.commentList
                this.commentData.reverse()
            }
        },
        methods: {
            init(){
                this.commentData = this.$store.getters['commentList'].data.commentList
                this.commentData.reverse()
            },
            timeInterval(Old, New, isHans){
                Old=new Date(Old);
                New=new Date(New);
                let time=(New.getTime()-Old.getTime())/(24*60*60*1000);
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
            },
            reply(data){
                this.$store.commit('commentVal', '@ '+data+' ')
            },
            startsOption(data) {
                this.$axios.put('/comment/startsCount', {
                    startsCount: data.startsCount,
                    _id: data._id,
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
                            message: '出现未知错误，操作失败！',
                            type: 'error'
                        });
                    }
                    this.$store.commit('commentReload', true)
                    this.$store.commit('commentReload', false)
                })
            },
        },


    }

</script>
<style lang='css' scoped>
    .header {
        width: calc(100% - 34px);
        position: relative;
        height: 24px;
        padding-right: 3px;
        padding-left: 1px;
        margin-bottom: 4px;
        line-height: 24px;
        display: inline-block;
        transform: translateY(-7px);
    }

    .content {
        font-size: 15px;
        margin-bottom: 10px;
        padding-left: 38px;
    }

    .option {
        padding-left: 38px;
        padding-bottom: 10px;
        height: 31px;
    }

    .option .options {
        display: none;
    }

    .option:hover .options {
        display: inline-block;
    }
    .optionItem {
        margin-right: 15px;
        display: inline-block;
        cursor: pointer;
    }
</style>