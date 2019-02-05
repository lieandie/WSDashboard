<template>
    <card :title="environment.title">
        <environment-card-content v-if="environmentHasNoProjects" slot="content" :projects="environment.projects"/>
        <environment-card-footer slot="footer" :title="environment.title"/>
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
            }
        }
    }
</script>

<style scoped>

</style>