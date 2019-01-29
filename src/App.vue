<template>
  <div class="container">
    <Header />
    <SideNav />
    <router-view />
  </div>
</template>

<style>
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  padding-left: 8%;
  padding-right: 8%;
}

body {
  margin: 0;
}
</style>
<script>
import Header from "./components/Header";
import SideNav from "./components/SideNav";

export default {
  components: { SideNav, Header }
};
</script>
