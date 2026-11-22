<template>
  <div class="signup">
    <form class="signup-form" @submit.prevent="signup">
      <div class="form-row">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>

      <div class="form-row">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>

      <p class="error" v-if="password && !passwordLengthValid">
        The password is not valid - It must contain 8 to 14 characters.
      </p>
      <p class="error" v-if="password && !hasUppercase">
        The password is not valid - It must include at least one uppercase letter.
      </p>
      <p class="error" v-if="password && !hasTwoLowercase">
        The password is not valid - It must include at least two lowercase letters.
      </p>
      <p class="error" v-if="password && !hasNumber">
        The password is not valid - It must include at least one numeric value.
      </p>
      <p class="error" v-if="password && !startsWithUppercase">
        The password is not valid - It must start with an uppercase letter.
      </p>
      <p class="error" v-if="password && !hasUnderscore">
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
.signup {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 325px;
  max-width: 100%;
  padding: 30px;
  border-radius: 12px;
  background-color: var(--block-color);
  box-sizing:border-box;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

label {
  width: 80px;
  text-align: right;
}

input {
  flex: 1;
  min-width: 70px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 10px;
  border: none;
}

button {
  background-color: var(--main-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

.error {
  color: var(--error-color);
  font-size: 13px;
  text-align: left;
  margin: 5px 0;
}
</style>
