<template>
  <section class="characters-list">
    <h3>This is a characters.vue component {{ name }}</h3>
  </section>
</template>

<script>
import { public_key, secret_key } from '@/config.js'

export default {
  name: 'Characters',
  data: () => ({
    name: 'WUHUUUUUU'
  }),
  methods: {
    getCharacters: function() {
      this.axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
        )
        .then(result => {
          console.log(result)
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
