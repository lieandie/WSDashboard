<template>
  <div class="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.app {
  font-family: StemWebMedium, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  padding: 2% 8%;
}

.app__router {
  background-color: aqua;
  width: 100%;
  display: flex;
}

.app__sidenav {
  position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
}

body {
  margin: 0;
}

main {
  margin-top: 18px;
}
</style>

<script>
import Header from "./components/Header";

export default {
  components: { Header }
};
</script>
