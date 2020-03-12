<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="primary darken-3"
    dark
  >
    <v-toolbar-title
      style="width: 256px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down"> {{ $t('toolbar.appName') }}</span>
    </v-toolbar-title>
    <v-app-bar-nav-icon @click.stop="toggleSideBar" />
    <v-spacer />
    <v-btn icon @click="handleFullScreen()">
      <v-icon>fa-fw fa-expand</v-icon>
    </v-btn>
    <v-btn icon>
      <v-badge color="red" overlap>
        <span slot="badge">5</span>
        <v-icon medium>fa-fw fa-bell</v-icon>
      </v-badge>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          large
          v-on="on"
        >
          <v-avatar
            size="32px"
            item
          >
            <v-img
              src="@/assets/logo.svg"
              alt="Vuetify"
            /></v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(item.title) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { toggleFullScreen } from '@/utils';
import { mapGetters } from 'vuex';
export default {
  name: 'AppBar',
  data() {
    return {
      items: [
        {
          icon: 'fa-fw fa-user',
          href: '#',
          title: 'toolbar.profile',
          click: this.handleProfile
        },
        {
          icon: 'fa-fw fa-cog',
          href: '#',
          title: 'toolbar.settings',
          click: this.handleSettings
        },
        {
          icon: 'fa-fw fa-arrows-alt',
          href: '#',
          title: 'toolbar.logout',
          click: this.handleLogout
        }
      ]
    };
  },
  computed: {
    ...mapGetters([
      'miniVariant',
      'showSettings',
      'device',
      'avatar'
    ]),
    key() {
      return this.$route.path;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleMiniVariant');
    },
    handleFullScreen() {
      toggleFullScreen();
    },
    handleLogout() {
      console.log('handleSetting');
    },
    handleProfile() {
      console.log('handleProfile');
    },
    handleSettings() {
      this.$vuetify.goTo(0);
      this.$store.dispatch('settings/changeSetting', {
        key: 'showSettings',
        value: true
      });
    }
  }
};
</script>

<style scoped>
  .v-toolbar__title {
    font-weight: 600;
  }
</style>
