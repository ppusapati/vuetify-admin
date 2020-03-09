<template>
  <div>
    <nav-drawer />

    <app-bar />

    <app-main />
  </div>
</template>

<script>
import NavDrawer from './components/NavDrawer';
import AppBar from './components/AppBar';
import AppMain from './components/AppMain';

export default {
  name: 'Layout',
  components: {
    AppBar,
    NavDrawer,
    AppMain
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
};
</script>
