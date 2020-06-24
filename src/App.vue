<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('./assets/marvel-logo.png')"
            transition="scale-transition"
            width="120"
        /></router-link>
      </div>

      <v-spacer></v-spacer>

      <v-menu :value="openMenu">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            elevation="0"
            v-bind="attrs"
            v-on="on"
            width="120"
            height="60"
          >
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <v-btn to="/about" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-help</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      openMenu: true
    }
  }
}
</script>
