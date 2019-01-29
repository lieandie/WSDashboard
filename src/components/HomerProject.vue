<template>
  <div class="container">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  name: "HomerProject"
};
</script>

<style scoped>
.container {
  text-align: center;
    padding-top: 18px;
}
</style>
