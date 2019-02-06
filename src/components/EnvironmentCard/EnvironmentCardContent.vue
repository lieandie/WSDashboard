<template>
    <div class="environment-card-content">
        <project v-for="project in projects" :key="project.id" :title="project.title"
                 :is-online="project.online"/>
    </div>
</template>

<script>
    import Project from "./Project"

    export default {
        name: "EnvironmentCardContent",
        props: {
            projects: null
        },
        components: {Project}
    }
</script>

<style lang="scss">
    @import "../../styles/variables/color";
    @import "../../styles/variables/border";
    @import "../../styles/variables/shadow";

    .environment-card-content {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
    }

    .environment-card-content > div {
        flex-grow: 1;
        margin: 2px;
        @include box-shadow(1);
    }
</style>