export default {
  characters(state) {
    return state.characters
  },
  cachedCharacter(state) {
    return id => state.cached_characters[id]
  }
}
