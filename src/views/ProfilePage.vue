<template>
  <div id="app">
    <header>
      <div class="left_side_header">
        <ul>
          <a href=""><li></li></a>
          <a href=""><li></li></a>
        </ul>
      </div>
      <div class="header_logo">
        <a href="/"
          ><img
            src="../assets/images/icon-left-font-monochrome-white.png"
            alt="logo groupomania"
        /></a>
      </div>
      <div class="right_side_header">
        <ul>
          <a href="/register"><li>Inscription</li></a>
          <a href="/login"><li>Connexion</li></a>
        </ul>
      </div>
    </header>
    <main>
        <div class="ProfileSection">
          <div class="ProfileHeader">
            <h2>Modifiez vos informations</h2>
          </div>
          <div class="ProfileBody">
            <form @submit="login">
              <input type="email" name="email" placeholder="Changer d'Email" v-model="email" required/>
              <input type="password" name="password" v-model="password" placeholder="Modifier votre mot de passe" required/>
              <button id="ProfileEdit" type="submit">Modifier</button>
            </form>
          </div>
        </div>
      </main>
  </div>
</template>

<script>
export default {
    name: "ProfilePage",
};
//TO DO: modification info BDD
</script>

<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  font-family: "Montserrat", sans-serif;
  color: rgb(228, 230, 235);
}

h2 {
  text-decoration: underline #d1515a;
  color: rgb(228, 230, 235);

}

header {
  top: 0;
  background-color: #091f43;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105%;
  height: 15%;
  left: -3%;
  position: fixed;
  z-index: 3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 100% 100%;
  border-bottom-right-radius: 100% 100%;
}

header img {
  width: 400px;
  padding: 50px;
  justify-content: center;
}

header ul,
header li {
  list-style: none;
  display: flex;
  padding-right: 50px;
  font-size: 1.25em;
}

header a:visited {
  color: white;
}

header a:hover {
  color: #d1515a;
}

a {
  text-decoration: none;
}

/*Main Edit Section*/

.ProfileSection {
  background: #242526;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 25%;
  margin-top: 15%;
  border-radius: 15px;
  padding: 20px;
}

.ProfileBody form {
  display: flex;
  flex-direction: column;
}

#ProfileEdit {
  margin-bottom: 10px;
  margin: auto;
  margin-top: 15px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #d1515a solid;
  border-radius: 5px;
  width: 50%;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  transition-duration: 0.4s;
}

input {
  outline: none;
  border: none;
  background: #18191a;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  color: rgb(228, 230, 235);
  font-size: 1.1em;
}

#ProfileEdit:hover {
  background-color: #d1515a;
  color: white;
}
</style>