<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-form v-model="valid" ref="signup" lazy-validation>
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
            @keyup.enter="submit"
          >
          </v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            hint="Must be at least 6 characters"
            :rules="passwordRules"
            :append-icon="passVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (passVisible = !passVisible)"
            :type="!passVisible ? 'password' : 'text'"
            required
            @keyup.enter="submit"
            autocomplete="new-password"
          >
          </v-text-field>
          <v-text-field
            label="Confirm Password"
            v-model="confirmPassword"
            hint="Must match password from above"
            :rules="confirmPasswordRules"
            :append-icon="confVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (confVisible = !passVisible)"
            :type="!confVisible ? 'password' : 'text'"
            required
            @keyup.enter="submit"
          >
          </v-text-field>
          <v-btn class="text-xs-right"
            block
            @click="submit"
            :disabled="!valid"
            :loading="loading"
          >
            submit
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      email: '',
      password: '',
      confirmPassword: '',
      passVisible: false,
      confVisible: false,
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Enter a valid email'
      ],
      passwordRules: [ (v) => !!v || 'Password is required' ],
      confirmPasswordRules: [
        (v) => !!v || 'You must confirm your password',
        (v) => v === this.password || 'Your passwords must match'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    submit () {
      if (this.$refs.signup.validate()) {
        this.$store.dispatch('createUser', {
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push('preferences')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
