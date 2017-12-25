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
}
</style>
