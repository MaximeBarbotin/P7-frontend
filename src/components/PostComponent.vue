<template>
  <div class="container">
    <div class="post">
      <div class="row">
        <div class="PostName">
          <h2>{{ post.title }}</h2>
        </div>
        <div class="PostDate">
          <p>{{ post.date }}</p>
        </div>
      </div>
      <div class="row">
        <div class="PostImg">
          <img :src="postImage(post.image)" alt="Post image" />
        </div>
      </div>
      <div class="row">
        <div class="PostContent">
          <p>
            {{ post.content }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="PostLike">
          <button id="LikeButton" v-on:click="counter += 1">
            <i class="fa fa-thumbs-up"></i>
          </button>
          <div class="LikeCounter">
            <p>{{ counter }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTemplate",
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

.PostImg :last-child {
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
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #27292b solid;
  border-radius: 5px;
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

.LikeCounter {
  width: 50px;
  height: 45px;
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #27292b solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  line-height: 0%;
}

h2 {
  text-decoration: underline #d1515a;
  color: rgb(228, 230, 235);
}
</style>
