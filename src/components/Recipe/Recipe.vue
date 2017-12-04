<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax
        :src="recipe.image"
        height="400"
        class="mb-3"
      >
        <v-layout column align-center justify-center>
          <h1>{{ recipe.title }}</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-title class="headline">Ingredients</v-card-title>
        <v-card-text>
          <ul class="ml-4">
            <li>Meat<ul><li>test</li></ul></li>
          </ul>
        </v-card-text>
      </v-card>
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
      return this.$store.getters.findRecipe(parseInt(this.$route.params.id))
    }
  }
}
</script>

<style scoped></style>
