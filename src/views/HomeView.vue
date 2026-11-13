<script setup>
import Post from '../components/Post.vue'

import { useStore } from 'vuex'

import { onMounted } from 'vue'

const store= useStore()

onMounted(() => {
  store.dispatch('fetchPosts')
})

</script>

<template>
  <!-- The main page: left column, posts in the middle, right column -->
  <div class="home">
    <aside class="sidebar"></aside>

    <div class="feed">
      <Post 
        v-for="post in store.state.posts"
        :key="post.id"
        :postId="post.id"
        />

      <button class="reset-btn" @click="store.commit('resetLikes')">
        Reset Likes
      </button>
    </div>

    <aside class="sidebar"></aside>
  </div>
</template>

<style scoped>
/* Put the three columns in one row */
.home {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

/* Columns on the left and on the right */
.sidebar {
  background-color: var(--block-color);
  width: 150px;
  border-radius: 12px;
}

/* The middle column with the posts */
.feed {
  width: 350px;
}

/* On small screens (phones) we hide the side columns */
@media (max-width: 700px) {
  .sidebar {
    display: none;
  }
}

.reset-btn {
  background-color: #d3e8f7;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  display: block;
  margin: 5px auto 15px;
}

.reset-btn:hover {
  background-color: #b5d7ee;
}
</style>