<template>
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
</template>

<script>
export default {
  name: 'Character-Card',
  props: {
    character: {
      type: Object,
      default: function() {
        return {
          name: '',
          imageUrl: '',
          id: -1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
