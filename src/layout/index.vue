<template>
  <div>
    <nav-drawer />

    <app-bar />

    <app-main />
    <v-navigation-drawer v-model="showSettings" class="setting-drawer" temporary right hide-overlay fixed>
      <system-settings />
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavDrawer from './components/NavDrawer';
import AppBar from './components/AppBar';
import AppMain from './components/AppMain';
import SystemSettings from '@/components/system/Settings';
import { mapGetters } from 'vuex';

export default {
  name: 'Layout',
  components: {
    AppBar,
    NavDrawer,
    AppMain,
    SystemSettings
  },
  data: () => ({
    rightDrawer: false
  }),
  computed: {
    ...mapGetters([
      'showSettings'
    ]),
    showSettings: {
      get() {
        return this.$store.state.settings.showSettings;
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        });
      }
    }
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
