export const updateSelectedCategories = (state, payload) => {
  state.selectedCategories = payload
}

export const setLoading = (state, payload) => {
  state.isLoading = payload
}

export const setError = (state, payload) => {
  state.error = payload
}

export const clearError = (state) => {
  state.error = null
}

export const setUser = (state, payload) => {
  state.user = payload
}
