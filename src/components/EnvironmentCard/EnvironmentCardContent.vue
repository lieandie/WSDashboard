<template>
    <div>
        <project v-for="project in projects" :key="project.id" :title="project.title"
                 :is-online="project.online"/>
    </div>
</template>

<script>
    import Project from "../Project"

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

    .services__card-content {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        padding: 6px;
    }

    .services__card-content > div {
        margin: 2px;
        @include box-shadow(1);
    }
</style>