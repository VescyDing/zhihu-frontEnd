<template>
    <div id="app">
        <index/>
    </div>
</template>

<script>
    import index from './components/index'

    export default {
        name: 'app',
        components: {
            index
        },
        data() {
            return {}
        },
        watch: {},
        mounted: function () {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .center {
        width: 1000px;
        margin: 0 auto;
        display: block !important;
    }

    html {
        min-width: 1000px;
    }

    .tiweninput .el-input__inner {
        border: 0;
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 20px;
    }

    #signInput .el-form-item__label {
        font-size: 20px;
    }

    #signInput .el-input__inner {
        font-size: 20px;
    }

    .questionAdd .el-dialog__body {
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 0;
    }

    .content .ContentItem-actions {
        padding: 0 20px !important;
    }

    .questionTag {
        display: inline-block !important;
        height: 30px !important;
        padding: 0 12px !important;
        font-size: 14px !important;
        line-height: 30px !important;
        color: #0084ff !important;
        vertical-align: top !important;
        border-radius: 100px !important;
        background: rgba(0, 132, 255, .1) !important;
        margin-right: 10px;
    }

    .smallEditor .w-e-toolbar {
        overflow-x: scroll !important;
        border: 0 !important;
    }

    .smallEditor .w-e-text-container {
        border: 0 !important;
    }

    /* table 样式 */
    table {
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
    }
    table td,
    table th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding: 3px 5px;
    }
    table th {
        border-bottom: 2px solid #ccc;
        text-align: center;
    }

    /* blockquote 样式 */
    blockquote {
        display: block;
        border-left: 8px solid #d0e5f2;
        padding: 5px 10px;
        margin: 10px 0;
        line-height: 1.4;
        font-size: 100%;
        background-color: #f1f1f1;
    }

    /* code 样式 */
    code {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        background-color: #f1f1f1;
        border-radius: 3px;
        padding: 3px 5px;
        margin: 0 3px;
    }
    pre code {
        display: block;
    }

    /* ul ol 样式 */
    ul, ol {
        margin: 10px 0 10px 20px;
    }

    .comment .el-dialog__header {
        border-bottom: 1px solid #f6f6f6!important;
        padding-bottom: 20px!important;
    }
    .comment .el-dialog__body{
        padding-top: 0!important;
    }
</style>
