<template>
    <card :title="getEnvironmentTitle">
        <environment-card-content v-if="environmentHasNoProjects" slot="content" :projects="getEnvironmentProjects"/>
        <environment-card-footer slot="footer" :title="getEnvironmentTitle" @filterExpressionChanged="setFilterExpression($event)"/>
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
        data: function () {
            return {
                filterExpression: ''
            };
        },
        computed: {
            environmentHasNoProjects: function () {
                return this.environment.projects.length > 0;
            },
            getEnvironmentProjects: function () {
                return this.environment.projects.filter(project => project.title.includes(this.filterExpression));
            },
            getEnvironmentTitle: function () {
                return this.environment.title;
            }
        },
        methods: {
            setFilterExpression: function (filterExpression) {
                this.filterExpression = filterExpression;
            }
        }
    }
</script>