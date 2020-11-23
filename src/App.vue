<template>
  <div id="app">
    <div id="nav">
      <router-link to="/register"><RegisterPage/></router-link>
      <router-link to="/login"><LoginPage/></router-link>

    </div>
    <router-view />
  </div>
</template>

<script>

import RegisterPage from './components/RegisterPage.vue'
import LoginPage from './components/LoginPage.vue'



export default {
  name: 'App',
  components: {
    RegisterPage,
    LoginPage,
  },

  data: function() {
  return {
    userConnection: true,
    posts:[
      { title: "Notre nouveau logo !", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Titre 2", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "1216173.jpg" },
      { title: "Titre 3", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "tetzetezt.png" },
      { title: "Titre 4", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "icon-above-font.png" },
      { title: "Titre 5", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?", 
      date: "13/11/2020 à 16H11", 
      image: "1216173.jpg" },
      
    ]
  };}
}
</script>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  background-color: #18191A;
}


</style>
