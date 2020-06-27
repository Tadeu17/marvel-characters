import { shallowMount } from '@vue/test-utils'
import ListCard from '@/components/characters/ListCard'

describe('base/ListCard', () => {
  it('should render the character title and an image', () => {
    const wrapper = shallowMount(ListCard, {
      propsData: {
        character: { id: 1, name: '3-D Man', imageUrl: 'an image url' }
      }
    })
    const cardTitle = wrapper.get('.character-card-container h2')
    expect(cardTitle.text()).toBe('3-D Man')

    const cardImage = wrapper.get('.character-card-container img')
    expect(cardImage.attributes('src')).toBe('an image url')
  })
})
