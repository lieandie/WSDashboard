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
        name: "Service"
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";

    .service {
        text-align: center;
        border: 1.5px solid $accent-color;
        padding: 4px;
        border-radius: $primary-border-radius;
        cursor: pointer;
    }
</style>
