  import mymain from './components/main/main'
  import login from './components/login/login'
  import profile from './components/main/content/profile'
  import setting from './components/main/content/setting'
  import question from './components/question/index'




  const routes = [
    {
      path: '/',
      component: mymain
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/question',
      component: question
    },
  ]

export default routes