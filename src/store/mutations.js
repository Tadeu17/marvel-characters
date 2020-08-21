import {
  CACHE_CHARACTER,
  CACHE_CHARACTER_COMICS,
  SET_CHARACTERS,
  SET_LOADING
} from './mutations.type'

export default {
  [CACHE_CHARACTER](state, params) {
    if (!params.character.description.length > 0)
      params.character.description = 'No description available'

    params.character.imageUrl = `${params.character.thumbnail.path}/standard_large.jpg`

    state.cached_characters[params.character.id] = params.character
  },
  [CACHE_CHARACTER_COMICS](state, params) {
    state.cached_characters[params.character.id].detailedComics =
      params.character.comics
  },
  [SET_CHARACTERS](state, params) {
    state.characters = params.characters.map(character => {
      character.imageUrl = `${character.thumbnail.path}/standard_large.jpg`
      return character
    })
  },
  [SET_LOADING](state, isLoading) {
    isLoading ? state.loading++ : state.loading--
  }
}
