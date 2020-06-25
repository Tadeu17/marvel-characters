import store from '@/store'
import mockData from './mockData/index'
import { resetState } from './helpers'
import { SET_CHARACTERS } from '@/store/mutations.type'

describe('Mutations', () => {
  beforeEach(resetState)

  console.log(typeof mockData.CHARACTERS)
  it('Should correctly set the characters', () => {
    store.commit(SET_CHARACTERS, {
      characters: mockData.CHARACTERS
    })

    expect(store.state.characters).toMatchObject(mockData.CHARACTERS)
  })
})
