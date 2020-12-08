<template>
  <div id="app">
    <div id="nav">></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function () {
    return {
      userConnection: false,
  }},
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  background-color: #18191a;
}
</style>
