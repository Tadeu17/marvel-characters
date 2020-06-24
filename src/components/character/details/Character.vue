<template>
  <section>
    <img :src="character.imageUrl" alt="char image" />

    <h3>
      {{ character.name }}
    </h3>

    <p>
      {{ character.description }}
    </p>

    <v-btn to="/">
      Back
    </v-btn>
  </section>
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

    this.character = this.cachedCharacter(this.id)
  },
  computed: {
    ...mapGetters(['cachedCharacter'])
  },
  methods: {
    getCharacter() {
      let self = this

      return new Promise(async function(resolve, reject) {
        if (!self.cachedCharacter(self.id)) {
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
