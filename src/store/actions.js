import axios from 'axios'
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTER,
  FETCH_CHARACTER_COMICS
} from './actions.type'
import {
  CACHE_CHARACTER,
  CACHE_CHARACTER_COMICS,
  SET_CHARACTERS,
  SET_LOADING
} from './mutations.type'
import { API_URL } from '../config.js'
import { public_key } from '@/config.js'

export default {
  initStore({ commit, dispatch }) {
    axios.defaults.baseURL = API_URL

    dispatch(FETCH_CHARACTERS).catch(error => {
      alert(
        'An error occured. We should redirect this to an error page $router.push(errorPage)'
      )
    })
  },
  [FETCH_CHARACTERS]({ commit }) {
    return new Promise(function(resolve, reject) {
      commit(SET_LOADING, true)
      axios
        .get(`characters?apikey=${public_key}`)
        .then(response => {
          commit(SET_CHARACTERS, {
            characters: response.data.data.results
          })
          commit(SET_LOADING, false)
          resolve()
        })
        .catch(error => {
          commit(SET_LOADING, false)
          reject(error)
        })
    })
  },
  [FETCH_CHARACTER]({ commit }, params) {
    return new Promise(function(resolve, reject) {
      commit(SET_LOADING, true)

      axios
        .get(`characters/${params.id}?apikey=${public_key}`)
        .then(response => {
          commit(CACHE_CHARACTER, {
            character: response.data.data.results[0]
          })
          commit(SET_LOADING, false)
          resolve()
        })
        .catch(error => {
          commit(SET_LOADING, false)
          reject(error)
        })
    })
  },
  [FETCH_CHARACTER_COMICS]({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .get(`characters/${params.id}/comics?apikey=${public_key}`)
        .then(response => {
          commit(CACHE_CHARACTER_COMICS, {
            character: {
              id: params.id,
              comics: response.data.data.results
            }
          })
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
