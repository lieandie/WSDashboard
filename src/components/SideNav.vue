<template>
  <nav class="container">
    <div class="container__link">
      <router-link to="/services"><fai icon="cubes" size="2x"/></router-link>
    </div>
    <div class="container__link">
      <router-link to="/favourites"><fai icon="star" size="2x"/></router-link>
    </div>
    <div class="container__link">
      <router-link to="/settings"><fai icon="cog" size="2x"/></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideNav"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: blue;
}
.container__link {
  size: 50px;
}
</style>
