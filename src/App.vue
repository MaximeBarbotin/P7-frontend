<template>
  <div id="app">
    <div id="nav">></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function () {
    return {
      userConnection: false,
      posts: [
        {
          title: "Notre nouveau logo !",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "icon-above-font.png",
        },
        {
          title: "Titre 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure laudantium hic animi architecto aliquam illo dignissimos repellat, maiores beatae quis perferendis autem aperiam, id veritatis porro, vitae unde. Quisquam?",
          date: "13/11/2020 à 16H11",
          image: "1216173.jpg",
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
    };
  },
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  background-color: #18191a;
}
</style>
