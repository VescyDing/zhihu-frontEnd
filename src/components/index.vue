<template>
    <div>
        <el-container>
            <el-header class="my-el-header" v-if="showNav">
                <mynav/>
            </el-header>
            <el-main :class="showNav?'mainbgc':'nomainbgc'">
                <router-view/>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import mynav from './nav/nav'

    export default {
        name: '',
        props: [''],
        data() {
            return {
                showNav: this.$cookies.get('loginStatus').isLogin ? this.$cookies.get('loginStatus').isLogin : false
            };
        },

        components: {
            mynav,
        },

        computed: {},

        beforeMount() {
        },

        mounted() {
        },

        methods: {},

        watch: {
            $route(to, from) {
                console.log(to.path);
                if (to.path == '/question'){
                  this.$store.commit('askDisableCtrl', true)
                } else if (to.path == '/'){
                  this.$store.commit('askDisableCtrl', false)
                }
            }
        },

    }

</script>
<style lang='css' scoped>
    .relative {
        position: relative;
    }

    .my-el-header {
        margin-top: 0;
        width: 100%;
        padding: 0;
        height: 50px !important;
        z-index: 999;
        position: fixed;
        top: 0;
        background-color: #fff;
    }

    .mainbgc {
        margin-top: 50px;
        width: 100%;
        background-color: rgb(246, 246, 246);
        padding-top: 10px;
        padding-bottom: 10px;
        position: relative;
        overflow: hidden;
    }

    .nomainbgc {
        padding: 0 !important;
    }
</style>