<template>
  <div class="signup">
    <form>
      <h1>Signup</h1>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupView',

  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>


<style scoped>
/* Put the content in the middle of the page */
.signup {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
