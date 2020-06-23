<template>
  <section class="characters-list">
    <h3>This is a characters.vue</h3>

    {{ this.$route.params.id }}

    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{ name: 'character', params: { id: character.id } }">
          {{ character.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { public_key, secret_key } from '@/config.js'

export default {
  name: 'Characters',
  data: () => ({
    characters: []
  }),
  created() {
    this.getCharacters()
  },
  methods: {
    getCharacters: function() {
      this.axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
        )
        .then(result => {
          this.characters = result.data.data.results
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.characters-list {
  background-color: #666;
}
</style>
