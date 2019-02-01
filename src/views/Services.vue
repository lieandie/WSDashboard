<template>
    <div class="services">
        <div class="row">
            <objects-card title="Среды">
                <div class="card-content">
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                    <h-object title="WebService"/>
                </div>
            </objects-card>
            <objects-card title="Проекты">
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
        <div class="row">
            <objects-card title="Сервисы">
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
    import HObject from "../components/HObject";
    import ObjectsCard from "../components/ObjectsCard";

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

    .row:last-child {
        margin-top: 4px;
    }

    .row .div:first-child {
        flex-grow: 1;
    }

    .row .div:last-child {
        flex-grow: 1;
    }

    .row > div {
        flex-grow: 1;
    }

    .card-content {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 4px;
    }

    .card-content > div {
        margin: 2px;
    }
</style>
