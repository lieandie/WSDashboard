<template>
  <div class="container">
    <div class="environments">
      <div class="environments__title">
        Среды
      </div>
      <div class="environments__content">
        <HomerProject title="WebService" />
        <HomerProject title="WebService" />
        <HomerProject title="WebService" />
        <HomerProject title="WebService" />
      </div>
    </div>
    <div class="navigation">
      <div class="projects__title">
        Проекты
      </div>
      <div class="projects__content">
        <HomerProject title="WebService" />
        <HomerProject title="PrintServer" />
        <HomerProject title="CreditBroker" />
        <HomerProject title="WebClient" />
        <HomerProject title="CIF" />
        <HomerProject title="Reporting-service" />
        <HomerProject title="WPS" />
      </div>
    </div>
  </div>
</template>

<script>
import HomerProject from "../components/HomerProject";

export default {
  name: "projects",
  components: {
    HomerProject
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.environments {
  display: flex;
  flex-direction: column;
  background-color: blue;
}

.navigation {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: aqua;
}

.projects__content {
}

.environments__content > div,
.projects__content > div {
  margin: 6px;
}
</style>
