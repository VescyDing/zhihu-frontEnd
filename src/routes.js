  import recommend from './components/main/content/recommend/recommend'
  import attention from './components/main/content/attention/attention'
  import hotsearch from './components/main/content/hotsearch/hotsearch'
  

  const routes = [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/attention',
      component: attention
    },
    {
      path: '/hotsearch',
      component: hotsearch
    }
  ]

export default routes