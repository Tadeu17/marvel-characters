export default {
  characters(state) {
    return state.characters
  },
  character(state, id) {
    return state.cachedCharacters[id]
  }
}
