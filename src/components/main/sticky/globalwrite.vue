<template>
  <div>
    <div id="glwNav">
      <div class="glwNavItem">
        <svg class="Zi Zi--Paper GlobalWrite-navIcon" fill="#8590a6" viewBox="0 0 24 24" width="24" height="24"><path d="M9.273 6.13c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v6.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V8.68c0-1.079-.065-1.407-.248-1.743a1.348 1.348 0 0 0-.576-.564c-.343-.18-.68-.243-1.782-.243H9.273zm0-1.63h5.454c1.486 0 2.025.151 2.568.436.543.284.97.7 1.26 1.232.29.532.445 1.059.445 2.512v6.64c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 17.3 5 16.773 5 15.32V8.68c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232.543-.285 1.082-.436 2.568-.436zM8.5 8.576v1.467h7V8.576h-7zm0 2.609v1.467h7v-1.467h-7zm0 2.608v1.468h4.667v-1.468H8.5z"></path></svg>
        <span>写回答</span>
      </div>
      <div class="glwNavItem">
        <svg class="Zi Zi--WriteArticle GlobalWrite-navIcon" fill="#8590a6" viewBox="0 0 24 24" width="24" height="24"><path d="M15.764 6.779l-3.76 3.765c-.428.43-.555.567-.667.713a1.666 1.666 0 0 0-.208.348c-.076.167-.137.344-.314.926l-.073.243.242-.074c.58-.177.757-.238.925-.314.13-.06.232-.12.347-.209.146-.112.282-.239.712-.668l3.759-3.766-.963-.964zm.963-.965l.963.965.685-.686c.167-.168.227-.263.253-.349a.187.187 0 0 0 0-.12c-.026-.086-.086-.18-.253-.348l-.148-.148c-.167-.167-.262-.228-.348-.254a.187.187 0 0 0-.12 0c-.085.026-.18.087-.347.254l-.685.686zm.87 5.471l1.702-1.705v5.549c0 1.52-.158 2.07-.455 2.626a3.096 3.096 0 0 1-1.287 1.29c-.555.297-1.105.455-2.623.455h-5.57c-1.517 0-2.068-.158-2.622-.455a3.096 3.096 0 0 1-1.287-1.29C5.158 17.2 5 16.65 5 15.13v-5.58c0-1.52.158-2.071.455-2.627a3.096 3.096 0 0 1 1.287-1.289c.554-.297 1.105-.455 2.622-.455h3.497l-1.702 1.705H9.364c-1.126 0-1.47.066-1.82.254-.258.138-.45.33-.588.59-.188.35-.254.694-.254 1.822v5.58c0 1.128.066 1.472.254 1.822.138.259.33.452.588.59.35.188.694.254 1.82.254h5.57c1.127 0 1.47-.066 1.82-.254.258-.138.45-.331.589-.59.187-.35.253-.694.253-1.822v-3.844zm1.593-7.121l.148.147c.33.33.502.616.594.918.09.301.09.61 0 .911-.092.302-.265.587-.594.917l-5.408 5.416c-.486.487-.648.635-.845.786a3.02 3.02 0 0 1-.614.37c-.226.102-.433.176-1.091.376l-.852.26a1.021 1.021 0 0 1-1.275-1.277l.26-.854c.2-.659.273-.866.375-1.092.103-.227.218-.418.369-.616.15-.197.299-.36.785-.846l5.407-5.416c.33-.33.614-.504.915-.595.301-.092.61-.092.91 0 .301.09.586.264.916.595z"></path></svg>
        <span>写文章</span>
      </div>
      <div class="glwNavItem">
        <svg class="Zi Zi--WritePin GlobalWrite-navIcon" fill="#8590a6" viewBox="0 0 24 24" width="24" height="24"><path d="M17.13 5.52V3.5h1.35v2.02h2.02v1.35h-2.02V8.9h-1.35V6.86H15.1V5.52h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45h4.78v1.7H8.8c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V10.4l.02.02zm-3.86-.22c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2a.628.628 0 0 0-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0l1.93 1.95c.24.25.63.25.87 0l.03-.02a.67.67 0 0 0 0-.93.687.687 0 0 0-.58-.17c-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9l.01-.01z"></path></svg>
        <span>写想法</span>
      </div>
    </div>
    <div class="glwDraft specialDraft">
      <svg class="Zi Zi--Later GlobalWriteAnswerLater-icon" fill="#8590a6" viewBox="0 0 24 24" width="24" height="24"><path d="M5.591 10.714C6.373 7.434 9.257 5 12.696 5c4.04 0 7.314 3.358 7.314 7.5 0 4.142-3.274 7.5-7.314 7.5-2.483 0-4.755-1.28-6.1-3.363a.816.816 0 0 1 .22-1.114.772.772 0 0 1 1.086.227c1.058 1.638 2.842 2.643 4.794 2.643 3.174 0 5.747-2.638 5.747-5.893s-2.573-5.893-5.747-5.893c-2.713 0-4.988 1.93-5.59 4.523l1.145.315a.418.418 0 0 1 .102.762l-2.36 1.397a.418.418 0 0 1-.577-.154l-1.362-2.42a.418.418 0 0 1 .475-.608l1.062.292zm7.987 1.376l2.794 1.654a.784.784 0 0 1 .283 1.059l-.015.027a.781.781 0 0 1-1.08.29l-3.112-1.844a.784.784 0 0 1-.145-.092.784.784 0 0 1-.292-.757V8.784a.784.784 0 1 1 1.567 0v3.306z"></path></svg>
      <span>我的稍后答</span>
    </div>
    <div class="glwDraft">
      <svg class="Zi Zi--Draft" fill="#8590a6" viewBox="0 0 24 24" width="18" height="18"><path d="M7.958 13.23c.588 1.704 2.176 2.924 4.042 2.924 1.866 0 3.454-1.22 4.042-2.923h4.53c.788 0 1.428.64 1.428 1.428v5.912c0 .79-.64 1.429-1.429 1.429H3.43C2.639 22 2 21.36 2 20.571V14.66c0-.789.64-1.428 1.429-1.428h4.53zm11.185-2h-4.526l-.466 1.348c-.325.943-1.186 1.576-2.151 1.576-.965 0-1.826-.633-2.151-1.576l-.466-1.347H4.857V4.46C4.857 3.655 5.511 3 6.32 3h11.395c.79 0 1.429.64 1.429 1.429v6.802z"></path></svg>
      <span>我的草稿</span>
    </div>

  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='css' scoped>
#glwNav {
  width: 296px;
  height: 97px;
  display: flex;
  padding-left: 7px;
}
.glwNavItem {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 23px;
  position: relative;
  width: 48px;
  height: 51px;
}
.glwNavItem svg {
  position: absolute;
  top: 0;
  text-align: center;
  left: 12px;
}
.glwNavItem span {
  position: absolute;
  bottom: 0;
  text-align: center;
}
.glwDraft {
  width: 256px;
  height: 48px;
  margin: 0 20px;
  position: relative;
  cursor: pointer;
}
.glwDraft svg {
  position: absolute;
  vertical-align: middle;
  left: 5px;
  top: 14px;
}
.glwDraft span {
  position: absolute;
  vertical-align: middle;
  left: 35px;
  line-height: 48px;
  color: #8590a6;
  font-size: 15px;
}
.specialDraft {
  border-bottom: 1px solid #eee;
}
.specialDraft svg{
  left: 2px;
  top: 12px;
}
</style>