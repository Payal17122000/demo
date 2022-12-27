<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="row">
    <div class="col-12">
      <div id="nav">
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/cats">Cats</router-link> -->
      </div>
    </div>

    <div class="col-12 bg-light">
      <router-view />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import AllUsers from "./components/AllUsers.vue";
// import UpSert from "./components/UpSert.vue";

export default {
  name: "App",
  components: {
    // AllUsers,
    // UpSert,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
