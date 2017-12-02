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
  console.log('We have called findRecipe ' + id)
  console.log(state.recipies.find(obj => obj.id === id))
  return state.recipies.find(obj => obj.id === id)
  // for (var i = 0; i < state.recipies.length; i++) {
  //   if (state.recipies[i].id === id) {
  //     return state.recipies[i]
  //   }
  // }
}
