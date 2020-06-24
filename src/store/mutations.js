import { SET_CHARACTERS, CACHE_CHARACTER } from './mutations.type'

const imageSize = 'standard_large.jpg'

export default {
  [SET_CHARACTERS](state, params) {
    state.characters = params.characters
  },
  [CACHE_CHARACTER](state, params) {
    if (!params.character.description.length > 0)
      params.character.description = 'No description available'

    params.character.imageUrl = `${params.character.thumbnail.path}/${imageSize}`

    state.cached_characters[params.character.id] = params.character
  }
}
