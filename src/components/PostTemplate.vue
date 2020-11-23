<template>
  <div id="app">
    <div class="PostTemplateBody">
      <aside>
        <div class="AsideMenu">
          <div class="AsideContent">
            <img src="../assets/images/icon-left-font-monochrome-white.png" alt="" />
            <ul>
              <a class="leftMenu" href="#"><li><i class="fa fa-home" aria-hidden="true"></i>Accueil</li></a>
              <a class="leftMenu" href="#"><li><i class="fa fa-search" aria-hidden="true"></i>Explorer</li></a>
              <a class="leftMenu" href="#"><li><i class="fa fa-bell" aria-hidden="true"></i>Notifications</li></a>
              <a class="leftMenu" href="#"><li><i class="fa fa-envelope" aria-hidden="true"></i>Messages</li></a>
              <a class="leftMenu" href="#"><li><i class="fa fa-ellipsis-h" aria-hidden="true"></i>Plus</li></a>
            </ul>
          </div>
        </div>
      </aside>
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
                  placeholder="Ecrivez ici..."></textarea>
                  <label for="AddIMG" id="AddIMG">Ajouter un média</label>
                <input type="file" id="AddIMG"/>
                <button id="publier">Publier</button>
              </div>
            </div>
            <div class="container" v-for="post in posts" :key="post.title">
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
              </div>
            </div>
            <!--<div class="container">
              <div class="post">
                <div class="row">
                  <div class="PostName">
                    <h2>Post Name</h2>
                  </div>
                  <div class="PostDate">
                    <p>13/11/2020 à 16H11</p>
                  </div>
                </div>
                <div class="row">
                  <div class="PostImg">
                    <img src="../assets/images/1216173.jpg" alt="Post image" />
                  </div>
                </div>
                <div class="row">
                  <div class="PostContent">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat iure laudantium hic animi architecto aliquam illo
                      dignissimos repellat, maiores beatae quis perferendis autem
                      aperiam, id veritatis porro, vitae unde. Quisquam?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat iure laudantium hic animi architecto aliquam illo
                      dignissimos repellat, maiores beatae quis perferendis autem
                      aperiam, id veritatis porro, vitae unde. Quisquam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="post">
                <div class="row">
                  <div class="PostName">
                    <h2>Post Name</h2>
                  </div>
                  <div class="PostDate">
                    <p>13/11/2020 à 16H11</p>
                  </div>
                </div>
                <div class="row">
                  <div class="PostImg">
                    <video controls>
                      <source src="../assets/images/171124_H1_006.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div class="row">
                  <div class="PostContent">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="post">
                <div class="row">
                  <div class="PostName">
                    <h2>Post Name</h2>
                  </div>
                  <div class="PostDate">
                    <p>13/11/2020 à 16H11</p>
                  </div>
                </div>
                <div class="row">
                  <div class="PostImg">
                    <img src="../assets/images/icon-above-font.png" alt="Post image" />
                  </div>
                </div>
                <div class="row">
                  <div class="PostContent">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat iure laudantium hic animi architecto aliquam illo
                      dignissimos repellat, maiores beatae quis perferendis autem
                      aperiam, id veritatis porro, vitae unde. Quisquam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="post">
                <div class="row">
                  <div class="PostName">
                    <h2>Post Name</h2>
                  </div>
                  <div class="PostDate">
                    <p>13/11/2020 à 16H11</p>
                  </div>
                </div>
                <div class="row">
                  <div class="PostImg">
                    <video controls>
                      <source src="../assets/images/171124_H1_006.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div class="row">
                  <div class="PostContent">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat iure laudantium hic animi architecto aliquam illo
                      dignissimos repellat, maiores beatae quis perferendis autem
                      aperiam, id veritatis porro, vitae unde. Quisquam?
                    </p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </main>

      <aside>
        <div class="AsideFriend">
          <div class="FriendAsideContent">
            <h2 class="RelationTitle">Relations</h2>
            <ul>
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/dwfscgcdhfvjhk.jpg"
                    alt="friend profil picture"
                  />Laure Melin
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/fgdrthfygjuhh.jpg"
                    alt="friend profil picture"
                  />Remi Michel
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/michelle-prince-profile-img.png"
                    alt="friend profil picture"
                  />Anne Delaune
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/PPP.jpg"
                    alt="friend profil picture"
                  />Maxime Barbotin
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/profile-img4.jpg"
                    alt="friend profil picture"
                  />Christophe Lemaitre
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/vfsdghkjhk.jpg"
                    alt="friend profil picture"
                  />Yann Dufour
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/photo-profil_301783868.jpg"
                    alt="friend profil picture"
                  />Antoine Peltier
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/fssdghf.jpg"
                    alt="friend profil picture"
                  />Nicolas Charpentier
                </li></a
              >
              <a class="rightMenu" href="#"
                ><li>
                  <img
                    src="../assets/images/ProfilPictures/csfdgdfhtjk.jpg"
                    alt="friend profil picture"
                  />Alexandre Chemon
                </li></a
              >
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostTemplate',
  props:{
    posts: Array,
  },
  methods:{
    postImage(image){
      if(image){
      return require("@/assets/images/" + image);
    }}
  }
}
</script>

<style scoped>
body, html{
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: rgb(228, 230, 235);
}

input[type="file"]{
  display: none;
}

body{
      background-color: #18191A;
}


.PostTemplateBody{
  padding-top: 180px;
}

main{
    position: relative;
    width: 50%;
    margin: auto;
    background-color: #18191A;
}

h2{
    text-decoration: underline #D1515A;
    color: rgb(228, 230, 235);
}

.RightLine{
    background: url('../assets/images/ligne-rouge-saumon.png') repeat-y right;
}


.post{
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

.LeftLine{
    width: 100%;
    justify-content: center;
    margin: auto;
    background: url('../assets/images/ligne-rouge-saumon.png') repeat-y left;
}

.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.PostName{
    font-size: 1.15em;
    text-decoration: underline #D1515A;
}

.PostDate{
    font-size: 0.9em;
    font-style: italic;
}

.PostImg :last-child{
    width: 100%;
}

.PostImg{
    margin: 0px -30px 0px -30px;

}

.PostContent{
    line-height: 140%;
}

#PostArea{
    margin: 10px 0px 20px 0px;
    color: rgb(228, 230, 235);

}

textarea {
    background: #18191A;
    color: rgb(228, 230, 235);
    border: 1px solid #18191A;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    resize: none;
    overflow: auto;
  }

#AddIMG{
    margin-bottom: 30px;
    background: #18191A;
    color: rgb(228, 230, 235);
    outline: none;
    border: 2px  #27292b solid;
    border-radius: 5px;
    width: 40%;
    padding: 10px;
    font-size: 1em;
    font-weight: bold;
}

#AddIMG:hover{
    background: #27292b;
}


#publier{
    margin-bottom: 10px;
    background: #18191A;
    color: rgb(228, 230, 235);
    outline: none;
    border: 2px  #D1515A solid;
    border-radius: 5px;
    width: 50%;
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
}

#publier{
    transition-duration: 0.4s;
}
  
#publier:hover{
    background-color: #D1515A; 
    color: white;
}

#PostArea::placeholder{
    color: rgb(228, 230, 235);
}

/*aside Left*/

aside ul{
    display: flex;
    flex-direction: column;
    float: right;
}

aside ul, header li{
    list-style: none;
    display: flex;
    padding-right: 50px;
    font-size: 1.25em;
}

aside a:visited{
    color: rgb(228, 230, 235);
}

aside a:hover{
    color: #D1515A;
}

a{
    text-decoration: none;
    color: rgb(228, 230, 235);
}

.AsideMenu{
    background-color: #18191A;
    position: absolute;
    right: 75%;
    width: 25%;
    height: 100%;
    font-size: 1.3em;
    position: fixed;
    top: 60px;
    padding-top: 120px;

}

.leftMenu{
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
}

.leftMenu i{
    margin-right: 10px;
}

.AsideContent img{
    width: 60%;
    margin-top: 0px;
    margin-bottom: 40px;
    margin-left: 20%;
}

/*Aside right*/

.AsideFriend{
    background-color: #18191A;
    width: 25%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 75%;
    padding-top: 120px;
}

.FriendAsideContent ul{
    float: left;
}

.RelationTitle{
    margin-left: 50px;
    margin-top: 75px;
}

.rightMenu{
    margin-bottom: 10px;
}

.rightMenu img{
    width: 60px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
