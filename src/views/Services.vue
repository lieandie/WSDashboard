<template>
    <div class="services">
        <card v-for="environment in environments" :key="environment.id" :title="environment.title">
            <div class="card-content">
                <service  v-for="project in environment.projects" :key="project.id" :title="project.title"/>
            </div>
        </card>
    </div>
</template>

<script>
    import Service from "../components/Service";
    import Card from "../components/Card";
    import {store} from "../utils/mock";

    export default {
        name: "projects",
        components: {
            Card, Service
        },
        data: function () {
            return {
                environments: store.state.environments
            };
        }
    };
</script>

<style lang="scss" scoped>

    .services {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        & > * {
            flex: 0 0 calc(50% - 8px);
            margin: 4px;
        }
    }

    .card-content {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        padding: 6px;
    }

    .card-content > div {
        margin: 2px;
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
