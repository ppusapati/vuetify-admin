<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleSideBar" />
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">Vuetify Admin</span>
    </v-toolbar-title>

    <v-spacer />
    <v-btn icon>
      <v-icon>fa-bell</v-icon>
    </v-btn>
    <v-btn
      icon
      large
    >
      <v-avatar
        size="32px"
        item
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        /></v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AppBar',
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'miniVariant',
      'avatar',
      'device'
    ]),
    key() {
      return this.$route.path;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleMiniVariant');
    }
  }
};
</script>

<style scoped>

</style>
