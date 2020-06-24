<template>
  <div class="home">
    <characters></characters>
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue'

export default {
  name: 'Home',
  components: {
    Characters
  }
}
</script>
