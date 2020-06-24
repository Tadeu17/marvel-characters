<template>
  <section class="characters-list">
    <ul
      class="__container mx-5 mx-md-auto py-5 d-flex flex-wrap justify-space-around"
    >
      <li v-for="character in characters" :key="character.id">
        <Character-Card :character="character"></Character-Card>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterCard from '@/components/character/list/CharacterCard'

export default {
  name: 'Characters',
  components: {
    CharacterCard
  },
  computed: {
    ...mapGetters(['characters'])
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
</style>
