<template>
    <div class="services">
        <card v-for="environment in environments" :key="environment.id" :title="environment.title">
            <div slot="content" class="services__card-content" v-if="environment.projects.length > 0">
                <project v-for="project in environment.projects" :key="project.id" :title="project.title" :is-online="project.online"/>
            </div>
        </card>
    </div>
</template>

<script>
    import Project from "../components/Project";
    import Card from "../components/Card";
    import {store} from "../utils/mock";

    export default {
        name: "projects",
        components: {
            Card, Project
        },
        data: function () {
            return {
                environments: store.state.environments
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables/shadow.scss";

    .services {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        & > * {
            flex: 0 0 calc(50% - 8px);
            margin: 4px;
        }
    }

    .services__card-content {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        padding: 6px;
    }

    .services__card-content > div {
        margin: 2px;
        @include box-shadow(1)
    }

    @media screen and (max-width: 540px) {
        .services > * {
            flex: 0 0 calc(100% - 8px);
        }
    }

    @media screen and (min-width: 1280px) {
        .services > * {
            flex: 0 0 calc(33.3% - 8px);
        }
    }
</style>
