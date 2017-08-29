<template>
  <div id="app" class="container my-3 my-md-5">
    <h1>Vue Contacts</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('fetchContacts');
  },
};
</script>

