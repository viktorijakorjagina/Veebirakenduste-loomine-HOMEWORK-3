<template>
  <div class="signup">
    <form @submit.prevent="signup">
      <h1>Signup</h1>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <p v-if="password && !passwordLengthValid">
        The password is not valid - It must contain 8 to 14 characters.
      </p>
      <p v-if="password && !hasUppercase">
        The password is not valid - It must include at least one uppercase letter.
      </p>
      <p v-if="password && !hasTwoLowercase">
        The password is not valid - It must include at least two lowercase letters.
      </p>
      <p v-if="password && !hasNumber">
        The password is not valid - It must include at least one numeric value.
      </p>
      <p v-if="password && !startsWithUppercase">
        The password is not valid - It must start with an uppercase letter.
      </p>
      <p v-if="password && !hasUnderscore">
        The password is not valid - It must include the character “_”.
      </p>

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
      password: '',
      submitted: false
    }
  },

  computed: {
    passwordLengthValid() {
      return this.password.length >= 8 && this.password.length < 15
    },
    hasUppercase() {
      return /[A-Z]/.test(this.password)
    },
    hasTwoLowercase() {
      return /[a-z].*[a-z]/.test(this.password)
    },
    hasNumber() {
      return /[0-9]/.test(this.password)
    },
    startsWithUppercase() {
      return /^[A-Z]/.test(this.password)
    },
    hasUnderscore() {
      return /_/.test(this.password)
    }
  },

  methods: {
    signup() {
      this.submitted = true
      
      if (
        this.passwordLengthValid &&
        this.hasUppercase &&
        this.hasTwoLowercase &&
        this.hasNumber &&
        this.startsWithUppercase &&
        this.hasUnderscore
      ) {
        alert('Signup successful!')
      } else {
        alert('Password is not valid!')
      }
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
