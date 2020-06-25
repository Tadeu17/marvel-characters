import {
  SET_CHARACTERS,
  CACHE_CHARACTER,
  CACHE_CHARACTER_COMICS
} from './mutations.type'

export default {
  [SET_CHARACTERS](state, params) {
    state.characters = params.characters.map(character => {
      character.imageUrl = `${character.thumbnail.path}/standard_large.jpg`
      return character
    })
  },
  [CACHE_CHARACTER](state, params) {
    if (!params.character.description.length > 0)
      params.character.description = 'No description available'

    params.character.imageUrl = `${params.character.thumbnail.path}/standard_large.jpg`

    state.cached_characters[params.character.id] = params.character
  },
  [CACHE_CHARACTER_COMICS](state, params) {
    state.cached_characters[params.character.id].detailedComics =
      params.character.comics
  }
}
