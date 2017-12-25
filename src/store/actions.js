import * as firebase from 'firebase'

export const updateSelectedCategories = ({ commit }, payload) => {
  commit('updateSelectedCategories', payload)
}

export const createUser = ({ commit }, payload) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
    commit('setLoading', false)
    console.log('We have registered a new user!')
    console.log(user)
  }).catch(error => {
    commit('setLoading', false)
    commit('setError', error.message)
  })
}

export const userSignIn = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      commit('setLoading', false)
      console.log('We have signed in!')
      console.log(user)
      resolve()
    }).catch(error => {
      commit('setLoading', false)
      commit('setError', error.message)
      reject(error)
    })
  })
}

export const clearError = ({ commit }) => {
  commit('clearError')
}
