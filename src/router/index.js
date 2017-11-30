import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Cadastro from '@/components/Cadastro'
import Home from '@/components/Home'
import Finder from '@/components/Finder'
import HomeContent from '@/components/HomeContent'
import StudiesFound from '@/components/StudiesFound'
import CurrentChats from '@/components/CurrentChats'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Login',
          component: Login
        },
        {
          path: '/cadastro',
          name: 'Cadastro',
          component: Cadastro
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
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
          path: '/currentChats',
          name: 'CurrentChats',
          component: CurrentChats
        },
        {
          path: '/chat/:id',
          name: 'Chat',
          component: Chat
        }
      ]
    }
  ]
})
