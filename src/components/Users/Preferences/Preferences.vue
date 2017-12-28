<template>
  <v-layout row wrap class="mt-5">
    <v-flex xs12 md8 offset-md2>
      <v-card>
        <v-layout row wrap>
          <v-flex xs6 class="secondary">
            <v-flex xs12 align-center justify-center layout>
              <v-avatar size="150px">
                <img src="/static/logo.svg" alt="Company logo">
              </v-avatar>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <v-card-text class="text-xs-center">
                <span class="headline">Awesome! Thanks for joining our family.</span>
              </v-card-text>
            </v-flex>
            <v-flex xs10 offset-xs1 align-center justify-center layout>
              <div class="file-upload">
                <v-btn
                  class="upload-button"
                  color="primary"
                  small
                  absolute
                  top
                  right
                  fab
                >
                  <v-icon>file_upload</v-icon>
                </v-btn>
              </div>
              <v-avatar size="150px">
                <img :src="imageUploaded ? profileImage : '/static/defaultProfile.png'" alt="Profile image">
              </v-avatar>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <v-card-text>Before you get cooking, we would love to find out more about you. How about a profile picture?</v-card-text>
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
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageUploaded: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  }
}
</script>

<style scoped>
.file-upload {
  position: absolute;
  width: 175px;
  height: 120px;
}
</style>
