// Import the function that creates a Vue app
import { createApp } from 'vue'

// Import the main component of our app
import App from './App.vue'

// Import the router (it decides which page to show)
import router from './router'

// Import the Vuex store (the global place where we keep the data)
import store from './store'

createApp(App).use(store).use(router).mount('#app')
