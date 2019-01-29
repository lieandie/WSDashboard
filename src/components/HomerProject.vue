<template>
  <div class="service">
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
.service {
  text-align: center;
  border: 2px solid #c8102e;
  padding: 4px;
}
</style>
