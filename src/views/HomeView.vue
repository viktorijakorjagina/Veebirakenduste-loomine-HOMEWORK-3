<template>
  <!-- The main page: left column, posts in the middle, right column -->
  <div class="home">
    <aside class="sidebar"></aside>

    <div class="feed">
      <p>Posts will be here</p>
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

/* Grey columns on the left and on the right */
.sidebar {
  background-color: #bbb;
  width: 150px;
  border-radius: 12px;
}

/* The middle column with the posts */
.feed {
  width: 350px;
}

/* On small screens (phones) we hide the grey columns */
@media (max-width: 700px) {
  .sidebar {
    display: none;
  }
}
</style>
