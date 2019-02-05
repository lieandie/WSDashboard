<template>
    <card :title="getEnvironmentTitle">
        <environment-card-content v-if="environmentHasNoProjects" slot="content" :projects="getEnvironmentProjects"/>
        <environment-card-footer slot="footer" :title="getEnvironmentTitle"/>
    </card>
</template>

<script>
    import Card from "../Card";
    import EnvironmentCardContent from "./EnvironmentCardContent";
    import EnvironmentCardFooter from "./EnvironmentCardFooter";

    export default {
        name: "EnvironmentCard",
        components: {EnvironmentCardFooter, EnvironmentCardContent, Card},
        props: {
            environment: Object
        },
        computed: {
            environmentHasNoProjects: function () {
                return this.environment.projects.length > 0;
            },
            getEnvironmentProjects: function () {
                return this.environment.projects;
            },
            getEnvironmentTitle: function () {
                return this.environment.title;
            }
        }
    }
</script>

<style scoped>

</style>