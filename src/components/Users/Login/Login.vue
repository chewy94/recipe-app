<template>
  <v-layout row wrap class="mt-5">
    <v-flex xs12 md8 offset-md2>
      <v-card>
        <v-layout row wrap>
          <v-flex xs6 class="primary">
            <v-flex xs12 align-center justify-center layout>
              <v-avatar size="150px">
                <img src="/static/logo.svg" alt="Company logo">
              </v-avatar>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <v-card-text class="text-xs-center">
                <span class="headline">Welcome to What's for Dinner!</span>
              </v-card-text>
              <v-card-text>We are a small group of people looking to solve the ultimate question... What's for dinner?</v-card-text>
            </v-flex>
          </v-flex>
          <v-flex xs6>
            <transition name="alert">
              <v-flex xs12 v-if="error">
                <alert @dismissAlert="errorDismissed" :message="error"></alert>
              </v-flex>
            </transition>
            <v-flex xs12 align-center justify-center layout>
              <v-avatar size="150px">
                <img src="/static/logo.svg" alt="Company logo">
              </v-avatar>
            </v-flex>
            <v-tabs centered v-model="activeTab">
              <v-tabs-bar class="transparent">
                <v-tabs-item
                  :href="'#' + 'signin'"
                >
                  Login
                </v-tabs-item>
                <v-tabs-item
                  :href="'#' + 'signup'"
                >
                  Sign Up
                </v-tabs-item>
                <v-tabs-slider color="primary"></v-tabs-slider>
              </v-tabs-bar>
              <v-tabs-items>
                <v-tabs-content id="signin" lazy>
                  <sign-in></sign-in>
                </v-tabs-content>
                <v-tabs-content id="signup" lazy>
                  <sign-up></sign-up>
                </v-tabs-content>
              </v-tabs-items>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import SignIn from '@/components/Users/Login/Forms/SignIn'
  import SignUp from '@/components/Users/Login/Forms/SignUp'
  export default {
    components: {
      'sign-in': SignIn,
      'sign-up': SignUp
    },
    data () {
      return {
        activeTab: 'signin'
      }
    },
    computed: {
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      errorDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style scoped>
.alert-enter-active, .alert-leave-active {
  transition: opacity 0.6s;
  opacity: 1;
}

.alert-enter, .alert-leave-to {
  opacity: 0;
}
</style>
