<template>
  <header class="site-header">
    <nav>

      <!-- Navigation links: they change the page without reloading it -->
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
/* scoped = these styles work only inside this component */
.site-header {
  background-color: var(--block-color);
  padding: 15px 20px;
  border-radius: 0 0 12px 12px;
}

/* Style of the links */
nav a {
  margin-right: 20px;
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
}

/* Vue adds this class to the link of the page that is open now */
nav a.router-link-active {
  color: var(--main-color);
  text-decoration: underline;
}
</style>