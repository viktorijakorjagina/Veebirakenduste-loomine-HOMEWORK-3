<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    postId: Number
})

const store = useStore()

import { computed } from 'vue'

const post = computed(() => {
    return store.state.posts.find(p => p.id === props.postId)
})
</script>

<template>
    <article class = "post" v-if="post">
        <header class="post-header">
            <div class="post-author">
                <span class="post-avatar"></span>
                <strong>{{ post.author }}</strong>
            </div>
            <time :datetime="post.createdAt">{{ post.createdAt }}</time>
        </header>
        <img v-if="post.image" :src="post.image" alt="Post image" />
        <p>{{ post.text }}</p>
        <button class="like-btn" @click="store.commit('addLike', post.id)">
            👍 {{ post.likes }}
        </button>
    </article>
</template>

<style scoped>
.post {
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 20px;
    box-sizing: border-box;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    gap: 10px;
}

.post-header time {
    font-size: 12px;
    color: #777;
}

.post img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.like-btn {
    background-color: #d3e8f7;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;
}

.like-btn:hover {
    background-color: #b5d7ee;
}

.post-author {
    display: flex;
    align-items: center;
    gap: 8px;
}

.post-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #668ba7;
    flex-shrink: 0;
}

</style>