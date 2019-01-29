<template>
  <div class="app">
    <Header />
    <div class="app__sidenav">
      <SideNav />
    </div>
    <div class="app__router">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  padding-left: 8%;
  padding-right: 8%;
}

.app__router {
  background-color: aqua;
  width: 100%;
  display: flex;
}

.app__sidenav {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  height: 100%;
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
