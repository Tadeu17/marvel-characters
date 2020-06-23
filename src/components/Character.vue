<template>
  <section>
    <img :src="character.imageUrl" alt="char image" />
    {{ character.imageUrl }} , {{ character.imageSize }}
    <h3>
      {{ character.name }}
    </h3>

    <p>
      {{ character.description }}
    </p>
  </section>
</template>

<script>
import { public_key, secret_key } from '@/config.js'

export default {
  name: 'Character',
  data: () => ({
    character: {
      name: '',
      imageUrl: '',
      imageSize: 'standard_large.jpg'
    }
  }),
  created() {
    this.getCharacter()
  },
  methods: {
    getCharacter: function() {
      const characterId = this.$route.params.id

      this.axios
        .get(
          `http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`
        )
        .then(result => {
          Object.assign(this.character, result.data.data.results[0])
          this.character.imageUrl = `${this.character.thumbnail.path}/${this.character.imageSize}`
          console.log(this.character.imageUrl, this.character.imageSize)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
