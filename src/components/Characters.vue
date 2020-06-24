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
import { mapGetters } from 'vuex'
import { FETCH_CHARACTERS } from '@/store/actions.type'

export default {
  name: 'Characters',
  computed: {
    ...mapGetters(['characters'])
  }
}
</script>

<style lang="scss" scoped>
.characters-list {
  background-color: #666;
}
</style>
