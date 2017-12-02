<template>
  <div>
    <v-parallax src="/static/backgrounds/food1.jpg" height="300">
    <v-layout column align-center justify-center>
      <h1>Recipe App</h1>
      <h4>A place for yummy things</h4>
    </v-layout>
  </v-parallax>
  <v-layout row class="mt-4">
    <v-flex xs12 sm8 offset-sm2>
      <v-toolbar card prominent color="transparent">
        <v-toolbar-title class="body-2 mr-3">Filter by type:</v-toolbar-title>
        <v-select
          @input="updateSelectedCategories($event)"
          :items="categories"
          v-model="filters"
          label="Select Food Types"
          prepend-icon='local_dining'
          hide-selected
          chips
          multiple
          deletable-chips
          solo
          autocomplete
        ></v-select>
      </v-toolbar>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="mt-4" justify-center>
    <v-flex xs12 sm4 lg2 v-for="recipe in recipies" :key="recipe.id" class="ma-4">
      <v-card flat hover :to="'/recipe/' + recipe.id">
        <v-card-media
          height="200px"
          :src="recipe.image"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span><v-chip label outline color="primary" class="category-ani">{{ recipe.category }}</v-chip></span><br/>
            <span class="headline">{{ recipe.title }}</span><br/>
            <span>{{ recipe.description }}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      hovered: false,
      filters: null,
      categories: this.$store.state.categories
    }
  },
  methods: {
    test (event) {
      console.log(event)
    },
    updateSelectedCategories (event) {
      this.$store.dispatch('updateSelectedCategories', event)
    }
  },
  computed: {
    recipies () {
      return this.$store.getters.filteredRecipies
    }
  }
}
</script>


<style scoped>
  @keyframes jiggle {
    20% {
      transform: rotate(5deg) translateY(-10px)
    }
    40% {
      transform: rotate(-10deg)
    }
    60% {
      transform: rotate(10deg)
    }
    80% {
      transform: rotate(-10deg)
    }
    100% {
      transform: rotate(5deg)
    }
  }

  .category-ani:hover {
    animation: jiggle .5s;
  }

  .recipe-enter-active {
    transition: all 300ms ease-out;
  }

  .recipe-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  .recipe-enter, .recipe-leave-to {
    opacity: 0;
  }

  .recipe-enter {
    transform: scale(0.9)
  }
</style>