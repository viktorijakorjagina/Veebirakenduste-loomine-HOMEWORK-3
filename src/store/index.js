// Function that creates a Vuex store
import { createStore } from 'vuex'

// The store is the global place where the data of the app lives.
// Every component can read the data from here.
export default createStore({
  state() {                      // state = the data itself
    return {
      posts: []
    }
  },

  // mutations = functions that change the state (for example, add a like)
  mutations: {},

  // actions = functions that can do work and then call mutations
  actions: {},

  // getters = functions that read and prepare the data for components
  getters: {}
})
