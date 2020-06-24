import axios from 'axios'
import { FETCH_CHARACTERS, FETCH_CHARACTER } from './actions.type'
import { SET_CHARACTERS, CACHE_CHARACTER } from './mutations.type'

import { public_key } from '@/config.js'

export default {
  async [FETCH_CHARACTERS]({ commit }) {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
      )
      commit(SET_CHARACTERS, {
        characters: response.data.data.results
      })
    } catch (error) {
      console.log(error)
    }
  },
  async [FETCH_CHARACTER]({ commit }) {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
      )
      commit(CACHE_CHARACTER, {
        character: response.data.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }
}
