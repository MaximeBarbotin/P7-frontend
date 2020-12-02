<template>
  <div class="friend">
    <a class="rightMenu" href="#">
      <li>
        <img :src="postImage(friend.image)" alt="friend profil picture" />{{
          friend.name
        }}
      </li>
    </a>
  </div>
</template>

<script>
export default {
  name: "FriendComponent",
};
</script>


<style scoped>
/*Aside right*/

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

.friend {
  margin-bottom: 15px;
}

.rightMenu img {
  width: 60px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
