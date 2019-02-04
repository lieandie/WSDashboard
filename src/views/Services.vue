<template>
    <div class="services">
        <div class="services__container">
            <objects-card title="RU86B3">
                <div class="card-content">
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                </div>
            </objects-card>
            <objects-card title="RU86B5">
                <div class="card-content">
                    <h-object title="WebService"/>
                    <h-object title="PrintServer"/>
                    <h-object title="CreditBroker"/>
                    <h-object title="WebClient"/>
                    <h-object title="CIF"/>
                    <h-object title="Reporting-service"/>
                    <h-object title="WPS"/>
                </div>
            </objects-card>
            <objects-card title="RU87B2">
                <div class="card-content">
                    <h-object title="WebService"/>
                    <h-object title="PrintServer"/>
                    <h-object title="CreditBroker"/>
                    <h-object title="WebClient"/>
                    <h-object title="CIF"/>
                    <h-object title="Reporting-service"/>
                    <h-object title="WPS"/>
                </div>
            </objects-card>
        </div>
    </div>
</template>

<script>
    import HObject from "../components/Service";
    import ObjectsCard from "../components/Card";

    export default {
        name: "projects",
        components: {
            ObjectsCard, HObject
        }
    };
</script>

<style lang="scss" scoped>
    .services {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .services__container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .services__container > * {
        flex: 0 0 calc(50% - 8px);
        margin: 4px;
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

    @media screen and (max-width: 540px){
        .services__container > * {
            flex: 0 0 calc(100% - 8px);
        }
    }
</style>
