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

<style lang="scss">
    @import "../../styles/variables/color";
    @import "../../styles/variables/border";

    .project {
        color: $utility-text-color;
        text-align: center;
        border: 1.5px solid transparent;
        padding: 4px;
        border-radius: $card-border-radius;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
    }
    .project_online{
        background: rgba(255, 255, 255, 0.5);
        color: $primary-text-color;
    }
</style>
