<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax
        :src="recipe.image"
        height="300"
        class="mb-3"
      >
        <v-layout column align-center justify-center>
          <h1>{{ recipe.title }}</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-flex xs12 md3>
      <v-card>
        <v-card-title class="headline">Ingredients</v-card-title>
        <v-list twoLine>
          <template v-for="item in recipe.ingredients">
            <v-subheader :key="item.category">{{ item.category }}</v-subheader>
            <v-list-tile v-for="subItem in item.items" :key="subItem.name">
              <v-flex xs10 offset-xs1>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ subItem.quantity }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-flex>
            </v-list-tile>
            <v-divider v-if="item.category !== recipe.ingredients[recipe.ingredients.length - 1].category" :key="item.category"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs12 md9>
      <v-layout row wrap>
        <v-flex xs12 md11 offset-md1>
          <v-tabs v-model="activeTab" :scrollable="false">
        <v-tabs-bar class="primary">
          <v-tabs-item
            v-for="tab in tabs"
            :key="tab"
            :href="'#' + tab"
            ripple
            >
            {{ tab }}
          </v-tabs-item>
          <v-tabs-slider color="secondary"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content
            v-for="tab in tabs"
            :key="tab"
            :id="tab"
            >
            <v-card flat v-if="tab.toLowerCase() === 'description'">
              <v-card-text style="white-space: pre;">{{ recipe[tab.toLowerCase()] }}</v-card-text>
            </v-card>
            <v-card flat v-else-if="tab.toLowerCase() === 'directions'">
              <v-list>
                <template v-for="item in recipe.directions">
                  <v-subheader :key="item.step">Step {{ item.step }}</v-subheader>
                  <v-list-tile :key="item.step">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.content }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'recipe',
  data () {
    return {
      activeTab: null,
      tabs: ['Description', 'Directions', 'Special']
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
