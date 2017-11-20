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
      <v-card flat class="card--flex-toolbar">
        <v-toolbar card prominent>
          <v-toolbar-title class="body-2 mr-3">Filter by type:</v-toolbar-title>
          <v-select
            :items="categories"
            v-model="filters"
            label="Select Food Categories"
            prepend-icon='local_dining'
            hide-selected
            chips
            multiple
            deletable-chips
            solo
            autocomplete
          ></v-select>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="mt-4" justify-center>
    <v-flex xs12 sm4 md2 v-for="recipe in recipies" :key="recipe.id" class="ma-4">
      <v-card flat hover>
        <v-card-media
          height="200px"
          :src="recipe.image"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span><v-chip label outline color="primary" class="rotate">{{ recipe.category }}</v-chip></span><br/>
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
      recipies: [
        {
          id: 1,
          title: 'Test Recipe Card 1',
          description: 'Test recipe description',
          category: 'Chicken',
          image: '/static/food/dish1.jpg'
        },
        {
          id: 2,
          title: 'Test Recipe Card 2',
          description: 'Test recipe description',
          category: 'Beef',
          image: '/static/food/dish1.jpg'
        },
        {
          id: 3,
          title: 'Test Recipe Card 3',
          description: 'Test recipe description',
          category: 'Veggies',
          image: '/static/food/dish1.jpg'
        },
        {
          id: 4,
          title: 'Test Recipe Card 4',
          description: 'Test recipe description',
          category: 'Pasta',
          image: '/static/food/dish1.jpg'
        }
      ],
      categories: [ 'Chicken', 'Beef', 'Veggies', 'Pasta' ]
    }
  },
  methods: {
    test: function () {
      console.log('hovered')
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

  .rotate:hover {
    animation: jiggle .5s;
  }
</style>