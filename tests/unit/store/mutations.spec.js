import store from '@/store'
import mockData from '../mockData/index'
import { resetState } from '../helpers'
import { SET_CHARACTERS } from '@/store/mutations.type'

describe('Mutations', () => {
  beforeEach(resetState)

  it('Should correctly set the characters', () => {
    store.commit(SET_CHARACTERS, {
      characters: mockData.CHARACTERS
    })

    expect(store.state.characters).toMatchObject(mockData.CHARACTERS)
    expect(store.state.characters[0].imageUrl).toBe(
      mockData.CHARACTERS[0].imageUrl
    )
    expect(store.state.characters[1].imageUrl).toBe(
      mockData.CHARACTERS[1].imageUrl
    )
  })
})