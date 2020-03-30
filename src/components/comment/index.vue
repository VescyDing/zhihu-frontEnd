<template>
    <div>
        <div style="width: 100%;border-bottom: 1px solid #f6f6f6;margin-top: 15px">
            <img style="display: inline-block;margin-right: 10px;height: 24px;width: 24px;" :src="avatar"/>
            <div class="header">
                <span style="position: relative;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: 15px;
                    line-height: 24px">上海程序员</span>
                <span style="position:absolute;right: 20px;top: 7px;color: #8590a6">6个月前</span>
            </div>
            <div class="content">
                java小白路过，望大佬分享学习资料和心得
            </div>
            <div class="like">
                <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Like" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="margin-right: 5px;"><path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z" ></path></svg></span>
                <span style="color: #8590a6;font-size: 15px">4</span>
            </div>
        </div>
        <div style="width: 100%;border-bottom: 1px solid #f6f6f6;margin-top: 15px">
            <img style="display: inline-block;margin-right: 10px;height: 24px;width: 24px;" :src="avatar"/>
            <div class="header">
                <span style="position: relative;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: 15px;
                    line-height: 24px">上海程序员</span>
                <span style="position:absolute;right: 20px;top: 7px;color: #8590a6">6个月前</span>
            </div>
            <div class="content">
                java小白路过，望大佬分享学习资料和心得
            </div>
            <div class="like">
                <span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Like" fill="#8590a6" viewBox="0 0 24 24" width="16" height="16" style="margin-right: 5px;"><path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z" ></path></svg></span>
                <span style="color: #8590a6;font-size: 15px">4</span>
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
            };
        },

        components: {},

        computed: {},

        mounted() {
            console.log(this.answerId);

        },

        methods: {},

        watch: {},

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
        margin-bottom: 10px
    }

    .like {
        margin-bottom: 10px;
    }
</style>