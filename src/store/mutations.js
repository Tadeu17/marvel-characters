import { SET_CHARACTERS, CACHE_CHARACTER } from './mutations.type'

export default {
  [SET_CHARACTERS](state, params) {
    state.characters = params.characters
  },
  [CACHE_CHARACTER](state, params) {
    state.cachedCharacters[params.character.id] = params.character
  }
}
