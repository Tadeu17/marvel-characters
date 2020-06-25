<template>
  <v-container tag="section" class="details-section py-5 mx-md-auto">
    <v-row class="fill-width flex-wrap" no-gutters>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <img
          class="character-image rounded-xl"
          :src="character.imageUrl"
          alt="char image"
        />
      </v-col>

      <v-col cols="12" md="6">
        <article class="character-info mt-5">
          <h3 class="text-center text-md-left">{{ character.name }}</h3>

          <p class="text-center text-md-left">{{ character.description }}</p>
        </article>
      </v-col>

      <v-col class="my-5 d-flex justify-center">
        <v-btn large class="back-button-size rounded-xl" to="/">Back</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CHARACTER } from '@/store/actions.type'

export default {
  name: 'Character',
  data: () => ({
    character: {},
    id: -1,
    imageUrl: ''
  }),
  async created() {
    this.id = this.$route.params.id

    await this.getCharacter()

    this.character = this.cachedCharacters[this.id]
  },
  computed: {
    ...mapGetters(['cachedCharacters'])
  },
  methods: {
    getCharacter() {
      let self = this

      return new Promise(async function(resolve, reject) {
        if (!self.cachedCharacters[self.id]) {
          await self.$store.dispatch(FETCH_CHARACTER, {
            id: self.id
          })
          resolve()
        }
        resolve()
      })
    }
  }
}
</script>

<style lang="scss">
.details-section {
  max-width: 1200px;

  .character-image {
    min-width: 200px;
    min-height: 200px;
  }

  .back-button-size {
    min-width: 200px !important;
  }
}
</style>
