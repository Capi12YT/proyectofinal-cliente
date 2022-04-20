import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from "../components/LoginComponent/LoginComponent.vue"
import RegisterComponent from "../components/RegisterComponent/RegisterComponent.vue"
import AdminComponent from "../components/AdminComponent/AdminComponent.vue"
import AdminTablesComponent from "../components/AdminTablesComponent/AdminTablesComponent.vue"
import DashboardComponent from "../components/DashboardComponent/DashboardComponent.vue"
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminComponent,
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
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent,
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
