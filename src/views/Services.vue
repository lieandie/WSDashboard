<template>
  <div class="container">
    <HomerProject title="WebService" />
    <HomerProject title="PrintServer" />
    <HomerProject title="CreditBroker" />
    <HomerProject title="WebClient" />
    <HomerProject title="CIF" />
    <HomerProject title="Reporting-service" />
    <HomerProject title="WPS" />
  </div>
</template>

<script>
import HomerProject from "../components/HomerProject";
export default {
  name: "Services",
  components: {
    HomerProject
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
