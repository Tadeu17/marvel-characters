<template>
  <section class="characters-list">
    <ul
      class="__container mx-5 mx-md-auto py-5 d-flex flex-wrap justify-space-around"
    >
      <li v-for="character in characters" :key="character.id">
        <article
          class="character-card-container my-2 d-flex flex-column align-center blue"
        >
          <h2 class="character-title--height text-center mb-3">
            {{ character.name }}
          </h2>

          <img class="mb-3" :src="character.imageUrl" alt="char image" />

          <v-btn :to="{ name: 'character', params: { id: character.id } }">
            Details
          </v-btn>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Characters',
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
