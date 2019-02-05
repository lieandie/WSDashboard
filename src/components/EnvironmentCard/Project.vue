<template>
    <div class="project" :class="{project_online: isOnline}">
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
    @import "../../styles/variables/color";
    @import "../../styles/variables/border";

    .project {
        text-align: center;
        border: 1.5px solid transparent;
        padding: 4px;
        border-radius: $primary-border-radius;
        cursor: pointer;
        background: $service-offline-color;
    }
    .project_online{
        background: $service-online-color;
    }
</style>
