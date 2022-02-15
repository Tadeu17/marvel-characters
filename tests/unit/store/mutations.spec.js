import mockData from '../mockData/index'
import { resetState } from '../helpers'
import { SET_CHARACTERS } from '@/store/mutations.type'
import mutations from '@/store/mutations'
import state from '@/store/state'

describe('Mutations', () => {
  beforeEach(() => {
    resetState()
  })

  it('Should correctly set the characters', () => {
    mutations[SET_CHARACTERS](state, {
      characters: mockData.CHARACTERS
    })

    expect(state.characters).toMatchObject(mockData.CHARACTERS)
    expect(state.characters[0].imageUrl).toBe(mockData.CHARACTERS[0].imageUrl)
    expect(state.characters[1].imageUrl).toBe(mockData.CHARACTERS[1].imageUrl)
  })
})
