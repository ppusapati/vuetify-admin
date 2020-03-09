<template>
  <v-content>
    <v-container
      grid-list-xl
      fluid
      transition="fade-transition"
    >
      <router-view :key="key" />
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>

</style>
