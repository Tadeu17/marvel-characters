<template>
  <v-container tag="section" class="details-section py-5 mx-md-auto">
    <Loader v-if="isLoading(loading)"></Loader>

    <v-row v-else class="fill-width flex-wrap" no-gutters justify="center">
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

      <v-col
        v-if="
          cachedCharacters[$route.params.id] &&
            cachedCharacters[$route.params.id].detailedComics
        "
        cols="12"
        md="8"
        class="my-5"
        align-self="center"
      >
        <h3 class="text-center my-5">Comics where it stars</h3>
        <v-carousel show-arrows hide-delimiters>
          <v-carousel-item
            v-for="item in cachedCharacters[$route.params.id].detailedComics"
            :key="item.id"
          >
            <v-sheet height="100%">
              <h4 class="text-center">{{ item.title }}</h4>
              <img
                class="caroussel-image"
                :src="`${item.thumbnail.path}/standard_large.jpg`"
                alt="char image"
              />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" class="my-5 d-flex justify-center">
        <v-btn large class="back-button-size rounded-xl" to="/">Back</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { isLoading } from '@/utils/utils.js'
import { mapGetters } from 'vuex'
import { FETCH_CHARACTER, FETCH_CHARACTER_COMICS } from '@/store/actions.type'
import Loader from '@/components/base/Loader'

export default {
  name: 'Character',
  components: { Loader },
  data: () => ({
    character: {},
    id: -1,
    imageUrl: ''
  }),
  async mounted() {
    this.id = this.$route.params.id

    await this.getCharacter()
    await this.getCharacterComics()

    this.character = this.cachedCharacters[this.id]
  },
  computed: {
    ...mapGetters(['loading', 'cachedCharacters'])
  },
  methods: {
    // this could and probably should be a mixin
    isLoading() {
      return isLoading(this.loading)
    },
    getCharacter() {
      if (!this.cachedCharacters[this.id]) {
        return this.$store.dispatch(FETCH_CHARACTER, {
          id: this.id
        })
      }
    },
    getCharacterComics() {
      if (!this.cachedCharacters[this.id].detailedComics) {
        return this.$store.dispatch(FETCH_CHARACTER_COMICS, {
          id: this.id
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.details-section {
  max-width: 1200px;

  .character-image {
    min-width: 200px;
    min-height: 200px;
  }

  .caroussel-image {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .back-button-size {
    min-width: 200px !important;
  }
}
</style>
