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
/* Colors of the whole app */
:root {
  --main-color: #357abd;           /* buttons and accents */
  --block-color: #cfe6f7;        /* header, footer, side columns, post cards */
  --page-color: #f3f9fd;             /* background of the page */
  --text-color: black;             /* normal text */
  --button-text-color: white;  /* text on blue buttons */
}

/* Global styles for the whole app */
body {
  margin: 0;
  font-family: monospace;
  background-color: var(--page-color);
  color: var(--text-color);
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
