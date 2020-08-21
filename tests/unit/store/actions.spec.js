import actions from '@/store/actions'
import mockData from '../mockData'

import { FETCH_CHARACTERS } from '@/store/actions.type'
import { SET_LOADING, SET_CHARACTERS } from '@/store/mutations.type'

let url = ''
jest.mock('axios', () => ({
  get: _url => {
    return new Promise(resolve => {
      url = _url
      resolve({
        data: {
          data: {
            results: mockData.CHARACTERS
          }
        }
      })
    })
  }
}))

describe('Actions', () => {
  test('FETCH_CHARACTERS to call SET_LOADING and SET_CHARACTERS', async function() {
    const commit = jest.fn()
    await actions[FETCH_CHARACTERS](
      { commit },
      {
        characters: mockData.CHARACTERS
      }
    )
    expect(commit).toHaveBeenNthCalledWith(1, SET_LOADING, true)
    expect(commit).toHaveBeenNthCalledWith(2, SET_CHARACTERS, {
      characters: mockData.CHARACTERS
    })
    expect(commit).toHaveBeenNthCalledWith(3, SET_LOADING, false)
  })
})
