<template>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <nav-drawer-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NavDrawerItem from './NavDrawerItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'NavDrawer',
  components: {
    NavDrawerItem
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'miniVariant',
      'permission_routes',
      'device'
    ]),
    miniVariant: {
      get() {
        return this.$store.state.app.miniVariant;
      },
      set(val) {
        this.$store.state.app.miniVariant = val;
      }
    }
  },
  methods: {
  }
};
</script>
