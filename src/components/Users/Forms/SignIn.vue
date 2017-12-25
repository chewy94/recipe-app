<template>
  <v-container style="height: 302px">
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-form v-model="valid" ref="signin" lazy-validation>
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
            @keyup.enter="submit"
          >
          </v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            :append-icon="passVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (passVisible = !passVisible)"
            :type="!passVisible ? 'password' : 'text'"
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
      passVisible: false,
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Enter a valid email'
      ],
      passwordRules: [ (v) => !!v || 'Password is required' ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    submit () {
      if (this.$refs.signin.validate()) {
        this.$store.dispatch('userSignIn', {
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
