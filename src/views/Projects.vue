<template>
    <div class="services">
        <environment-card v-for="environment in environments" :key="environment.id" :environment="environment"/>
    </div>
</template>

<script>
    import {store} from "../utils/mock";
    import EnvironmentCard from "../components/EnvironmentCard/EnvironmentCard";

    export default {
        name: "projects",
        components: {
            EnvironmentCard
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
