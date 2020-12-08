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
  props: {
    friend: Object,
  },
  methods: {
    postImage(image) {
      if (image) {
        return require("@/assets/images/" + image);
      }
    },
  },
};
</script>


<style scoped>
/*Aside right*/

.friend {
  margin-bottom: -10px;
}

.rightMenu img {
  width: 60px;
  border-radius: 50%;
  margin-right: 10px;}

a {
  text-decoration: none;
  color: rgb(228, 230, 235);
}

aside a:hover {
  color: #d1515a;
}
</style>
