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
  align-content: center;
  justify-content: center;
  padding-bottom: 8px;
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
  color: #c8102e;
  cursor: pointer;
  text-decoration: none;
}

.nav__button {
  width: 100%;
}

.nav__button:hover {
  background: linear-gradient(to top, #c8102e 0%, rgba(200, 16, 46, 0.15) 15%, white 75%);
}

.container .nav__button:first-child {
  border-bottom-left-radius: 12px;
}

.container .nav__button:last-child {
  border-bottom-right-radius: 12px;
}
</style>
