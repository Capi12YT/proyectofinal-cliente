import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from "../components/LoginComponent/LoginComponent.vue"
import RegisterComponent from "../components/RegisterComponent/RegisterComponent.vue"
import AdminComponent from "../components/AdminComponent/AdminComponent.vue"
import AdminTablesComponent from "../components/AdminTablesComponent/AdminTablesComponent.vue"
import DashboardComponent from "../components/DashboardComponent/DashboardComponent.vue"
import UserComponent from "../components/UserComponent/UserComponent.vue"
import ClientComponent from "../components/ClientComponent/ClientComponent.vue"
import SemanaSantaComponent from "../components/SemanaSantaComponent/SemanaSantaComponent.vue"
import NovedadesComponent from '../components/NovedadesComponent/NovedadesComponent.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'index',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminComponent,
    redirect: () => {
        return { name: 'admin-dashboard'}
      },
    children: [
      {
        path: 'tables',
        name: 'admin-tables',
        component: AdminTablesComponent,
      },
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        name: 'admin-users',
        component: UserComponent,
      }
    ]
  },{
    path: '/client',
    name: 'client',
    component: ClientComponent, 
    redirect: () => {
      return { name: 'novedades'}
    },
    children: [
      {
        path: 'novedades',
        name: 'novedades',
        component: NovedadesComponent,
      },
      {
        path: 'semana_santa',
        name: 'semana_santa',
        component: SemanaSantaComponent,
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
import { userTokenStore } from '@/store/tokenStore'

router.beforeEach((to) => {
  const store = userTokenStore()

  if (to.name == 'index' && !store.getToken) {
   return {name : 'login'}
  }

  if (to.name == 'index' && store.getToken) {
    if (store.getTokenData.rol == 'user') {
      return {name: 'client'}
    }else{
      return {name: 'admin'}
    }
  }

  if (to.name != 'register') {
    if ( to.name != 'login' && !store.getToken) {
      return {name: 'login'}
    }
  }

  if (to.name == 'admin' || to.name == 'admin-dashboard' || to.name == 'admin-tables' || to.name == 'admin-users') {
    if (store.getTokenData.rol != 'admin') {
      return { name: 'client' }
    }
    
  }
})
export default router
