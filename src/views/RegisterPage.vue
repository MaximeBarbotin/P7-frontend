<template>
  <div id="app">
    <body>
      <router-view></router-view>
      <header>
        <div class="left_side_header">
          <ul>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
          </ul>
        </div>
        <div class="header_logo">
          <a href="#"
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
        <div class="LoginSection">
          <div class="loginHeader">
            <h2>Inscrivez-vous</h2>
          </div>
          <div class="LoginBody">
            <form @submit="register($event)">
              <input type="text" name="first_name" placeholder="Prénom" required />
              <input type="text" name="last_name" placeholder="Nom" required />
              <input type="email" name="email" placeholder="Email" required />
            
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                minlength="4"
                required
              />
              <button id="login" type="submit">S'inscrire</button>
            </form>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "RegisterPage",
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validatePassword(password){
        return password.length >= 4;
    },
    register(event){
      console.log(event)
      event.preventDefault();
      if(!this.validateEmail(event.target.email.value) || !this.validatePassword(event.target.password.value)){
        return;
      }
      axios
      .post('http://localhost:3000/api/users/register', {
        first_name: event.target.first_name.value,
         last_name: event.target.last_name.value,
         email: event.target.email.value, 
         password: event.target.password.value
         })
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
};
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

.BackgroundColorDiv {
  width: 100%;
  height: 1000px;
  background-color: #18191a;
  position: absolute;
}

h2 {
  text-decoration: underline #d1515a;
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

/*Main Login Section*/

.LoginSection {
  background: #242526;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 300px;
  margin-top: 300px;
  border-radius: 15px;
  padding: 20px;
}

.LoginBody form {
  display: flex;
  flex-direction: column;
}

#login {
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

#login:hover {
  background-color: #d1515a;
  color: white;
}

@media screen and (max-width: 1000px) {
  .LoginSection {
  background: #242526;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 300px;
  margin-top: 300px;
  border-radius: 15px;
  padding: 20px;
}
header{
  flex-direction: column;
  height: 20%;

}

header ul,
header li {
  padding-right: 15px;
  padding-left: 15px;
}

header img {
  width: 300px;
  padding: 0px;
  margin-top: -50px;
  justify-content: center;
}
}
</style>