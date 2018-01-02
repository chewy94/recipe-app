<template>
  <v-alert color="error" dismissible @input="onClose" :value="true">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    onClose () {
      this.$emit('dismissAlert')
    }
  }
}
</script>

<style scoped>
.alert {
  margin-top: 0;
  position: fixed;
}

@media only screen and (min-width: 600px) and (max-width: 959px) {
  .alert {
    width: 48%;
  }
}

@media only screen and (min-width: 960px) {
  .alert {
    width: 32.5%;
  }
}
</style>
