<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
