export default {
  state: {
    askShowCtrl: false, //提问组件的展示控制
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
  },
  mutations: {
    selectedQues(state, res) {
      state.selectedQues = res
    },
    isLogin(state, res) {
      state.isLogin = res
    },
  },
  dispatch: {

  }
}