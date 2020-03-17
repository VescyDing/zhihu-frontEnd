export default {
  state: {
    askShowCtrl: false, //提问组件的展示控制

    isLogin: false,
  },
  getters: {
    isLogin(state){
      return state.isLogin
    }
  },
  mutations: {
    isLogin(state, res) {
      state.isLogin = res
    },
  },
  dispatch: {

  }
}