<template>
  <header class="site-header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #bbb;
  padding: 15px 20px;
  border-radius: 0 0 12px 12px;
}

nav a {
  margin-right: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>