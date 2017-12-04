export const filteredRecipies = (state) => {
  if (state.selectedCategories.length === 0) {
    return state.recipies
  }
  return state.recipies.filter(recipe => {
    for (var i = 0; i < state.selectedCategories.length; i++) {
      if (recipe.category === state.selectedCategories[i]) {
        return recipe
      }
    }
  })
}

export const findRecipe = (state) => (id) => {
  return state.recipies.find((obj) => {
    return obj.id === id
  })
}
