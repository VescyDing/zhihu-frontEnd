export default {
  state: {
    askShowCtrl: false, //提问组件的展示控制
    askDisableCtrl: false,
    isLogin: false,
    selectedQues: null,
  },
  getters: {
    isLogin(state){
      return state.isLogin
    },
    selectedQues(state){
      return state.selectedQues
    },
    askDisableCtrl(state){
      return state.askDisableCtrl
    },
  },
  mutations: {
    selectedQues(state, res) {
      state.selectedQues = res
    },
    isLogin(state, res) {
      state.isLogin = res
    },
    askDisableCtrl(state, res) {
      state.askDisableCtrl = res
    },
  },
  dispatch: {

  }
}