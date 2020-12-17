<template>
  <div class="container">
    <div class="post">
      <div class="row">
        <div class="PostName">
          <h2>{{ post.title }} ({{post.first_name}} {{post.last_name}})</h2>
        </div>
        <div class="PostDate">
          <p>{{ formatDate(post.date) }}</p>
        </div>
      </div>
      <div class="row">
        <div class="PostImg" v-if="post.image">
          <img :src="postImage(post.image)" alt="Post image" />
        </div>
      </div>
      <div class="row">
        <div class="PostContent">
          <p>
            {{ post.description }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="PostLike">
          <button
            id="LikeButton"
            v-on:click="addLike(post.id)"
            :key="post.title"
            :class="{active: post.liked === 1}"
          >
            <i class="fa fa-thumbs-up"></i>
          </button>
          <div class="LikeCounter">
            <p>{{ post.likes }}</p>
          </div>
        </div>
        <div class="EditSection" v-if="post.modifiable">
          <button @click="postModifying = post" id="EditButton">
            Modifier
          </button>
          <button @click="deletePost(post.id)" id="DeleteButton">
            Supprimer
          </button>
        </div>
      </div>
    </div>
    <div v-if="postModifying" class="modal-container">
      <div class="modal">
        <form
          @submit="($event) => modifyPost($event, post.id)"
          class="post modalContent"
        >
          <h2>Modifiez</h2>
          <input id="titleArea" v-model="postModifying.title" />
          <textarea
            v-model="postModifying.description"
            id="PostArea"
            name="PostArea"
            rows="5"
          ></textarea>
          <label for="AddIMGUpdate" id="AddIMG">Remplacer le média</label>
          <input type="file" id="AddIMGUpdate" name="image" />
          <div class="EditButtons">
          <button type="submit" id="EditSubmit">Modifier</button>
          <button id="AddIMG" @click="postModifying = null">Annuler</button>
          </div>

        </form>
      </div>
      <div class="backdrop" @click="postModifying = null"></div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "PostComponent",
  props: {
    post: Object,
    addLike: Function,
    deletePost: Function,
    modifyPostParent: Function,
  },
  data() {
    return {
      postModifying: null,
    };
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format("Publié le DD/MM/YYYY à HH:mm");
    },

    postImage(image) {
      if (image) {
        return "http://localhost:3000/images/" + image;
      }
    },

    //Modification d'un POST
    modifyPost(event, pid) {
      event.preventDefault();
      var bodyFormData = new FormData();
      bodyFormData.append('title', this.postModifying.title)
      bodyFormData.append('description', this.postModifying.description)
      bodyFormData.append('image', event.target.image.files[0])
      this.modifyPostParent(pid, bodyFormData)
      this.postModifying = null;
    },
  },
};
</script>


<style scoped>
body,
html,
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  color: rgb(228, 230, 235);
}

input[type="file"] {
  display: none;
}

body {
  background-color: #18191a;
}

.PostTemplateBody {
  padding-top: 30px;
}

main {
  position: relative;
  width: 50%;
  margin: auto;
  background-color: #18191a;
}

.post {
  color: rgb(228, 230, 235);
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-bottom: 40px;
  padding: 0px 30px 5px 30px;
  background-color: #242526;
  border-radius: 10px;
}

.LeftLine {
  width: 100%;
  justify-content: center;
  margin: auto;
  background: url("../assets/images/ligne-rouge-saumon.png") repeat-y left;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.PostName {
  font-size: 1.15em;
  text-decoration: underline #d1515a;
}

.PostDate {
  font-size: 0.9em;
  font-style: italic;
}

.PostImg img {
  width: 100%;
}

.PostImg {
  margin: 0px -30px 0px -30px;
}

.PostContent {
  line-height: 140%;
}

#PostArea {
  margin: 10px 0px 20px 0px;
  color: rgb(228, 230, 235);
}

.PostLike {
  display: flex;
}

#LikeButton {
  width: 50px;
  height: 45px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #27292b solid;
  border-radius: 10px;
  padding: 10px;
  font-size: 1em;
  font-weight: bold;
}

#LikeButton:hover {
  background: #27292b;
}

#LikeButton i {
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  box-sizing: border-box;
}

#LikeButton:hover {
  color: #d1515a;
}

#LikeButton:active {
  background:#18191a;
  color: #d1515a;
}

#LikeButton.active {
  
  color: #d1515a;
}

.LikeCounter {
  width: 50px;
  height: 45px;
  margin-bottom: 10px;
  color: rgb(228, 230, 235);
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  line-height: 75%;
}

/*///////////////////////////////////////*/
.EditSection {
  display: flex;
  flex-direction: row;
}

#EditButton {
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #d1515a solid;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  font-size: 1em;
  font-weight: bold;
}

#EditButton {
  transition-duration: 0.4s;
}

#EditButton:hover {
  background-color: #d1515a;
  color: white;
}

#DeleteButton {
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(235, 228, 228);
  outline: none;
  border: 2px #d1515a solid;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  font-size: 1em;
  font-weight: bold;
}

#DeleteButton {
  transition-duration: 0.4s;
}

#DeleteButton:hover {
  background-color: #d1515a7a;
  color: white;
}

h2 {
  text-decoration: underline #d1515a;
  color: rgb(228, 230, 235);
}

/*Modal STYLE*/
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 1000;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.modalContent {
  color: rgb(228, 230, 235);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 30px;
  background-color: #242526;
  border-radius: 10px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

textarea {
  background: #18191a;
  color: rgb(228, 230, 235);
  border: 1px solid #18191a;
  font-family: "Montserrat", sans-serif;
  outline: none;
  overflow: auto;
  border-radius: 10px;
}

#titleArea {
  background: #18191a;
  color: rgb(228, 230, 235);
  border: 1px solid #18191a;
  font-family: "Montserrat", sans-serif;
  outline: none;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 75%;
  height: 40px;
}

#AddIMG {
  margin-bottom: 30px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #27292b solid;
  border-radius: 10px;
  width: 40%;
  padding: 10px;
  margin: 0px 0px 20px 10px;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  float: right;
}

#AddIMG:hover {
  background: #27292b;
}

#PostArea::placeholder,
input::placeholder {
  color: rgb(228, 230, 235);
}

#EditSubmit {
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #d1515a solid;
  border-radius: 10px;
  width: 50%;
  padding: 10px;
  margin: auto;
  font-size: 1em;
  font-weight: bold;
  float: left;
}

#EditSubmit {
  transition-duration: 0.4s;
}

#EditSubmit:hover {
  background-color: #d1515a;
  color: white;
}

.EditButtons{
  align-items: center;
}
</style>
