<template>
  <div id="app">
    <HeaderNotConnected v-if="userConnection === false"/>
    <HeaderConnected v-if="userConnection === true"/>
    <PostTemplate :posts="posts"/>
    <LoginPage/>
    <RegisterPage/>

    
  </div>
</template>

<script>
import HeaderConnected from './components/HeaderConnected.vue'

import HeaderNotConnected from './components/HeaderNotConnected.vue'

import PostTemplate from './components/PostTemplate.vue'

import LoginPage from './components/LoginPage.vue'

import RegisterPage from './components/RegisterPage.vue'


export default {
  name: 'App',
  components: {
    HeaderConnected,
    HeaderNotConnected,
    PostTemplate,
    LoginPage,
    RegisterPage
  },
  data: function() {
  return {
    userConnection: true,
    posts:[
      { title: "Post Name", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Post Name", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Post Name", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Post Name", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Post Name", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      
    ]
  };}
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;

}
</style>
