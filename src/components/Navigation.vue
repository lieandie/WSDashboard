<template>
  <nav class="projects">
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
.projects {
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

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

.router-link-exact-active {
  /*background: linear-gradient(to top, rgba(200, 16, 46, 0.1) 0%, white 85%);*/
}

.nav__button {
  width: 100%;
  -webkit-transition: background-color 0.2s ease; /* Safari */
  transition: background-color 0.2s ease;
  border-bottom: 2px solid;
  border-color: white;

}

.nav__button:hover {
  border-bottom: 2px solid;
  border-color: #c8102e;
}

.projects .nav__button:first-child {
  border-bottom-left-radius: 12px;
}

.projects .nav__button:last-child {
  border-bottom-right-radius: 12px;
}
</style>
