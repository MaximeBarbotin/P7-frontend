<template>
  <div id="app">
    <HeaderNotConnected/>
    <PostTemplate/>

    
  </div>
</template>

<script>
import PostTemplate from './components/PostTemplate.vue'
import HeaderNotConnected from './components/HeaderNotConnected.vue'




export default {
  name: 'App',
  components: {
    PostTemplate,
    HeaderNotConnected

  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;

}
</style>
