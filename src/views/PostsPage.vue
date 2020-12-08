<template>
  <div id="app">
    <div class="PostTemplateBody">
      <!--Aside Left-->
      <aside>
        <div class="AsideMenu">
            <img
              src="../assets/images/icon-left-font-monochrome-white.png"
              alt=""
            />
            <ul>
              <a class="leftMenu" href="#"
                ><li>
                  <i class="fa fa-home" aria-hidden="true"></i>Accueil
                </li></a
              >
              <a class="leftMenu" href="#"
                ><li>
                  <i class="fa fa-search" aria-hidden="true"></i>Explorer
                </li></a
              >
              <a class="leftMenu" href="#"
                ><li>
                  <i class="fa fa-bell" aria-hidden="true"></i>Notifications
                </li></a
              >
              <a class="leftMenu" href="#"
                ><li>
                  <i class="fa fa-envelope" aria-hidden="true"></i>Messages
                </li></a
              >
              <a class="leftMenu" href="#"
                ><li>
                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>Plus
                </li></a
              >
            </ul>
        </div>
      </aside>
      <!--Post content-->
      <main>
        <div class="LeftLine">
          <div class="RightLine">
            <div class="container">
              <div class="PostingBloc post">
                <h2>Publier</h2>
                <textarea
                  id="PostArea"
                  name="PostArea"
                  rows="5"
                  placeholder="Ecrivez ici..."
                ></textarea>
                <label for="AddIMG" id="AddIMG">Ajouter un média</label>
                <input type="file" id="AddIMG" />
                <button id="publier">Publier</button>
              </div>
            </div>
            <div v-for="post in posts" :key="post.title">
              <PostComponent :post="post" :addLike="addLike"/>
            </div>
          </div>
        </div>
      </main>
      <!--Aside RIGHT-->
      <aside>
        <div class="AsideFriend">
          <div class="FriendAsideContent">
            <h2 class="RelationTitle">Relations</h2>
            <ul v-for="friend in friends" :key="friend.name">
              <FriendComponent :friend="friend"/>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>

import PostComponent from '../components/PostComponent.vue';
import FriendComponent from '../components/FriendComponent.vue';

export default {
  name: "PostsPage",
  components: {
    PostComponent,
    FriendComponent
  },
  data: function () {
    return {
      userConnection: false,
      posts: [
        //posts data
        {
          id: 1,
          title: "Notre nouveau logo !",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "icon-above-font.png",
          likes: 0,
        },
        {
          id: 2,
          title: "Titre 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "1216173.jpg",
          likes: 1,
        },
        {
          title: "Titre 3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "tetzetezt.png",
        },
        {
          title: "Titre 4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "icon-above-font.png",
        },
        {
          title: "Titre 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "1216173.jpg",
        },
      ],
      friends: [
        //liste d'amis data
        {
          name: "Laure Delacour",
          image: "ProfilPictures/dwfscgcdhfvjhk.jpg",
        },
        {
          name: "Remi Michel",
          image: "ProfilPictures/fgdrthfygjuhh.jpg",
        },
        {
          name: "Anne Delaune",
          image: "ProfilPictures/michelle-prince-profile-img.png",
        },
        {
          name: "Maxime Barbotin",
          image: "ProfilPictures/PPP.jpg",
        },
        {
          name: "Christophe Lemaitre",
          image: "ProfilPictures/profile-img4.jpg",
        },
        {
          name: "Yann Dufour",
          image: "ProfilPictures/vfsdghkjhk.jpg",
        },
        {
          name: "Antoine Peltier",
          image: "ProfilPictures/photo-profil_301783868.jpg",
        },
        {
          name: "Nicolas Charpentier",
          image: "ProfilPictures/fssdghf.jpg",
        },
        {
          name: "Alexandre Chemon",
          image: "ProfilPictures/csfdgdfhtjk.jpg",
        },
      ],
      counter: 0, //compteur de like
    };
  },
  created(){
      //TODO: Envoyer une requete à l'API pour récupérer le listing de posts et le listing friends
      //api.getPosts().then(d => this.posts = d)
      //api.getFriends().then(d => this.friends = d)
  },
  methods: {
    addLike(postId){
      //TODO: Envoyer une requete au backend pour incrémenter les likes
      for(let i = 0; i < this.posts.length; i++){
        if(this.posts[i].id === postId){
          this.posts[i].likes += 1;
          break;
        }
      }
    }
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

h2 {
  color: rgb(228, 230, 235);
}

.RightLine {
  background: url("../assets/images/ligne-rouge-saumon.png") repeat-y right;
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

textarea {
  background: #18191a;
  color: rgb(228, 230, 235);
  border: 1px solid #18191a;
  font-family: "Montserrat", sans-serif;
  outline: none;
  resize: none;
  overflow: auto;
  border-radius: 10px;
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
  margin: 20px 0px 20px 0px;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
}

#AddIMG:hover {
  background: #27292b;
}

#publier {
  margin-bottom: 10px;
  background: #18191a;
  color: rgb(228, 230, 235);
  outline: none;
  border: 2px #d1515a solid;
  border-radius: 10px;
  width: 50%;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

#publier {
  transition-duration: 0.4s;
}

#publier:hover {
  background-color: #d1515a;
  color: white;
}

#PostArea::placeholder {
  color: rgb(228, 230, 235);
}

/*aside Left*/

aside ul {
  display: flex;
  flex-direction: column;
  float: right;
}

aside ul,
header li {
  list-style: none;
  display: flex;
  padding-right: 50px;
  font-size: 1.25em;
}

aside a:visited {
  color: rgb(228, 230, 235);
}

aside a:hover {
  color: #d1515a;
}

a {
  text-decoration: none;
  color: rgb(228, 230, 235);
}

.AsideMenu {
  background-color: #18191a;
  position: absolute;
  right: 75%;
  width: 25%;
  height: 100%;
  font-size: 1.3em;
  position: fixed;
  top: 30px;
}

.leftMenu {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}

.leftMenu i {
  margin-right: 10px;
}

.AsideMenu img {
  width: 60%;
  margin-bottom: 40px;
  margin-left: 20%;
}

/*AsideRight*/
.AsideFriend {
  background-color: #18191a;
  width: 25%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 75%;
}

.FriendAsideContent ul {
  float: left;
}

.RelationTitle {
  margin-left: 50px;
  margin-top: 30px;
}

/*responsive !!!*/

@media screen and (max-width: 1430px) {
  .AsideFriend {
    display: none;
  }

  main {
    width: 75%;
    float: right;
  }

  .RightLine {
    background: none;
  }
}

@media screen and (max-width: 1150px) {
  .AsideMenu {
    position: fixed;
    height: 100px;
    font-size: 1.3em;
    top: 0px;
    right: 0;
    padding-top: 0px;
    z-index: 4;
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #242526;
    box-shadow: 0px 0px 10px #242526;
  }
  .AsideMenu img {
    display: none;
  }

  .AsideMenu ul {
    margin: auto;
    display: flex;
    flex-direction: row;
    height: 100px;
    line-height: 400%;
  }

  .AsideMenu li {
    margin-right: 20px;
  }

  main {
    width: 100%;
    position: relative;
    margin: auto;
    margin-top: 100px;
  }

  .LeftLine {
    background: none;
  }
}

@media screen and (max-width: 700px) {
  .AsideMenu {
    font-size: 1em;
  }

  .post {
    width: 80%;
  }
}
</style>
