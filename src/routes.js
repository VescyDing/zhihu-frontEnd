  import index from './components/index'
  import login from './components/login/login'
  import recommend from './components/main/content/recommend/recommend'
  import attention from './components/main/content/attention/attention'
  import hotsearch from './components/main/content/hotsearch/hotsearch'
  

  const routes = [
    {
      path: '/',
      component: index
    },
    {
      path: '/login',
      component: login
    },
  ]

export default routes