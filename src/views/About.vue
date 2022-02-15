<template>
  <section class="about">
    <h1 class="my-5 text-center">This is an about page</h1>
    <ul class="px-5">
      <li>
        This is a simple project to practice the front end connection to an api,
        to practice the basic routing skills and vuex store best practices with
        high focus on the latter.
      </li>

      <li>
        Also a way to practice testing in the vuex store, getting more familiar
        with general testing
      </li>

      <li>
        Some of the main topics addressed were:
        <ul>
          <li>
            keeping things cached in the store
          </li>
          <li>
            styling wise allowing responsiveness in a simple way
          </li>
          <li>
            configuration and creation of basic tests to actions, mutations,
            getters in the store, and to the built component
          </li>
        </ul>
      </li>

      <li>
        There are several improvements that can be made especially on code
        structure, but for a base project, this version so far feels like pretty
        enough.
      </li>

      <li>
        Some of those improvements would be for example the creation of a api
        service properly configured, adding specific generic styling and
        actually conceptualizing a more interesting UI/UX experience (this
        wasn't the focus at all in this project). Modularizing the store for
        future development (the current project doesn't need modularization)
        would be interesting as well
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
li {
  margin-bottom: 1rem;
}
</style>
