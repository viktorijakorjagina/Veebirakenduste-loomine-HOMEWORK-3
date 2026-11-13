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
  mutations: {
    addLike(state, postId) {
      const post = state.posts.find(p => p.id === postId)

      if (post) {
        post.likes++
      }
    },

    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0
      })
    },

    setPosts(state, posts) {
      state.posts = posts
    }
  },

  // actions = functions that can do work and then call mutations
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch('/posts.json')
      const posts = await response.json()
      commit('setPosts', posts)
    }
  },

  // getters = functions that read and prepare the data for components
  getters: {}
})
