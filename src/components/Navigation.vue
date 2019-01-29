<template>
  <nav class="container">
    <router-link to="/services" class="nav__button">
      <div class="container__link">
        <fai icon="cubes" size="1x" />
        <span>Сервисы</span>
      </div>
    </router-link>
    <router-link to="/favourites" class="nav__button">
      <div class="container__link">
        <fai icon="star" size="1x" />
        <span>Избранные</span>
      </div>
    </router-link>
    <router-link to="/settings" class="nav__button">
      <div class="container__link">
        <fai icon="cog" size="1x" />
        <span>Настройки</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 14px 14px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.container__link {
  display: flex;
  width: 100%;
  background-color: #C8102E;
  align-content: center;
  justify-content: center;
  padding-bottom: 14px;
}

.container__link * {
  margin-left: 4px;
}

span {
  text-align: center;
  font-size: 12px;
}

a,
.router-link-active,
.router-link-exact-active {
  color: #C8102E;
  cursor: pointer;
  text-decoration: none;
}

.nav__button {
  width: 100%;
}
</style>
