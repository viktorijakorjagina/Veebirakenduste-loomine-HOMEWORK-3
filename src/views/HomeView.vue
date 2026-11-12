<template>
  <div class="home">
    <aside class="sidebar"></aside>

    <div class="feed">
      <p>Posts will be here</p>
    </div>

    <aside class="sidebar"></aside>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.sidebar {
  background-color: #bbb;
  width: 150px;
  border-radius: 12px;
}

.feed {
  width: 350px;
}

@media (max-width: 700px) {
  .sidebar {
    display: none;
  }
}
</style>