import firebase from 'firebase'
require('firebase/firestore')

var config = {
  apiKey: 'AIzaSyDHgr4iO_rSQQtgplXqlBdG5hrQ72k09qM',
  authDomain: 'yummy-things.firebaseapp.com',
  databaseURL: 'https://yummy-things.firebaseio.com',
  projectId: 'yummy-things',
  storageBucket: 'yummy-things.appspot.com',
  messagingSenderId: '153314814395'
}
firebase.initializeApp(config)

var db = firebase.firestore()

export const updateSelectedCategories = ({ commit }, payload) => {
  commit('updateSelectedCategories', payload)
}

export const createDBUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    db.collection('users').doc(payload.uid).set({
      email: payload.email,
      displayName: payload.displayName,
      photoURL: payload.photoURL,
      emailVerified: payload.emailVerified,
      createdAt: payload.metadata.a,
      lastLoginAt: payload.metadata.b
    }).then(() => {
      console.log('We have added a user to cloud firestore')
      resolve()
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

export const createUser = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
      dispatch('createDBUser', user).then(() => {
        console.log(user)
        console.log('We have successfully done all signup stuff')
        commit('setUser', {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          createdAt: user.metadata.a,
          lastLoginAt: user.metadata.b,
          uid: user.uid
        })
        commit('setLoading', false)
        resolve()
      })
    }).catch(error => {
      commit('setLoading', false)
      commit('setError', error.message)
      reject(error)
    })
  })
}

export const userSignIn = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      commit('setUser', {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        createdAt: user.metadata.a,
        lastLoginAt: user.metadata.b,
        uid: user.uid
      })
      console.log('We have signed in!')
      commit('setLoading', false)
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
