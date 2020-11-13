<template>
    <div id="app">
        <div class="left_side_header">
            <ul>
                <li>Accueil</li>
                <li>Posts</li>
            </ul>
        </div>
        <div class="header_logo">
            <img src="../src/images/icon-left-font-monochrome-black.png" alt="">
        </div>
        <div class="right_side_header">
            <ul>
                <li>Mon compte</li>
                <li>Déconnexion</li>
            </ul>
        </div>
    </div>
    
</template>


<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>