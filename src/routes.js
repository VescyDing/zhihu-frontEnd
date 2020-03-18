  import mymain from './components/main/main'
  import login from './components/login/login'
  import profile from './components/main/content/profile'
  import setting from './components/main/content/setting'




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
      component: profile
    },
    {
      path: '/setting',
      component: setting
    },
  ]

export default routes