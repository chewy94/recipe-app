<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-btn>We are viewing a recipe:</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'recipe',
  data () {
    return {

    }
  },
  computed: {
    recipe () {
      console.log(this.$route.params.id)
      return this.$store.getters.findRecipe(this.$route.params.id)
    }
  }
}
</script>

<style scoped></style>
