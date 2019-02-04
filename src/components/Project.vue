<template>
    <div class="service" :class="{service_online: isOnline}">
        {{ title }}
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            isOnline: Boolean
        },
        name: "Project"
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";

    .service {
        text-align: center;
        border: 1.5px solid transparent;
        padding: 4px;
        border-radius: $primary-border-radius;
        cursor: pointer;
        background: $service-offline-color;
    }
    .service_online{
        background: $service-online-color;
    }
</style>
