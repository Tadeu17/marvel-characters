export default {
  characters(state) {
    return state.characters
  },
  cachedCharacter(state) {
    return id => state.cachedCharacters[id]
  }
}
