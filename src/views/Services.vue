<template>
    <div class="services">
        <card title="RU86B3">
            <div class="card-content">
                <service title="WebService"/>
                <service title="WebService"/>
                <service title="WebService"/>
                <service title="WebService"/>
            </div>
        </card>
        <card title="RU86B5">
            <div class="card-content">
                <service title="WebService"/>
                <service title="PrintServer"/>
                <service title="CreditBroker"/>
                <service title="WebClient"/>
                <service title="CIF"/>
                <service title="Reporting-service"/>
                <service title="WPS"/>
            </div>
        </card>
        <card title="RU87B2">
            <div class="card-content">
                <service title="WebService"/>
                <service title="PrintServer"/>
                <service title="CreditBroker"/>
                <service title="WebClient"/>
                <service title="CIF"/>
                <service title="Reporting-service"/>
                <service title="WPS"/>
            </div>
        </card>
        <card title="RU87C1">
            <div class="card-content">
                <service title="WebService"/>
                <service title="PrintServer"/>
                <service title="CreditBroker"/>
                <service title="WebClient"/>
                <service title="CIF"/>
                <service title="Reporting-service"/>
                <service title="WPS"/>
            </div>
        </card>
    </div>
</template>

<script>
    import Service from "../components/Service";
    import Card from "../components/Card";

    export default {
        name: "projects",
        components: {
            Card, Service
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
