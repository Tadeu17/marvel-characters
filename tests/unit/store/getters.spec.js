import mockData from '../mockData/index'
import getters from '@/store/getters'

describe('Getters', () => {
  it('should return an array of characters', () => {
    const state = {
      characters: mockData.CHARACTERS
    }
    expect(getters.characters(state)).toMatchObject(mockData.CHARACTERS)
  })
})
