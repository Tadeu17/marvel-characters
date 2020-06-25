<template>
  <section class="characters-list">
    <Loader v-if="isLoading(loading)"></Loader>
    <ul
      v-if="!isLoading(loading)"
      class="__container mx-5 mx-md-auto py-5 d-flex flex-wrap justify-space-around"
    >
      <li v-for="character in characters" :key="character.id">
        <Character-card :character="character"></Character-card>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { isLoading } from '@/utils/utils.js'
import CharacterCard from '@/components/characters/ListCard'
import Loader from '@/components/base/Loader'

export default {
  name: 'Characters',
  components: { CharacterCard, Loader },
  computed: {
    ...mapGetters(['loading', 'characters'])
  },
  methods: {
    // this could and probably should be a mixin
    isLoading() {
      return isLoading(this.loading)
    }
  }
}
</script>

<style lang="scss" scoped>
.characters-list {
  .__container {
    max-width: 1200px;
    list-style-type: none;
  }
}

.character-card-container {
  min-width: 220px;
  max-width: 220px;
  min-height: 300px;
  max-height: 300px;
  border: 1px solid black;
  border-radius: 20px;

  .character-title--height {
    height: 3em;
  }
}
</style>
