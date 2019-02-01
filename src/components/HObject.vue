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
        name: "HObject"
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";

    .service {
        text-align: center;
        border: 2px solid $primary-color;
        padding: 4px;
    }
</style>
