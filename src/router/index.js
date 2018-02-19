import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Cadastro from '@/components/Cadastro'
import Finder from '@/components/Finder'
import HomeContent from '@/components/HomeContent'
import StudiesFound from '@/components/StudiesFound'
import CurrentChats from '@/components/CurrentChats'
import RequestChats from '@/components/RequestChats'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro

    },
    {
      path: '/home',
      name: 'HomeContent',
      component: HomeContent
    },
    {
      path: '/finder',
      name: 'Finder',
      component: Finder
    },
    {
      path: '/studiesfound',
      name: 'StudiesFound',
      component: StudiesFound
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/currentChats',
      name: 'CurrentChats',
      component: CurrentChats
    },
    {
      path: '/requestChats',
      name: 'RequestChats',
      component: RequestChats
    }
  ]
})
