<template>
<div>
  <nav class="navbar navbar-dark bg-dark fixed-top">
      <router-link :to="'/'" class="navbar-brand">Nixon Carpintería</router-link >
  </nav>
  <div class="mt-5 pt-4">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
export default {


}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
