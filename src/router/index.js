// Functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// The two pages (views) of our app
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'

// The list of pages: which address shows which page
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/signup', name: 'signup', component: SignupView }
]

// Create the router with the list of pages
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Export the router so main.js can use it
export default router
