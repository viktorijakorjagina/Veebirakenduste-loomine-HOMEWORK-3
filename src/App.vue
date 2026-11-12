<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="app">

    <!-- The header is outside of <router-view>, so it is shown on every page -->
    <TheHeader />
    
    <main>
      <!-- Here Vue shows the current page (main page or signup page) -->
      <router-view />
    </main>

    <!-- The footer is also outside of <router-view>, so it is on every page -->
    <TheFooter />
  </div>
</template>

<style>
/* Global styles for the whole app */
body {
  margin: 0;
  font-family: monospace;
}

/* The app is as tall as the screen, so the footer stays at the bottom */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* The main part takes all the free space between header and footer */
main {
  flex: 1;
}
</style>
