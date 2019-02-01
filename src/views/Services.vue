<template>
    <div class="services">
        <objects-card grow="2" title="Среды">
            <div class="environments__content">
                <h-object title="WebService"/>
                <h-object title="WebService"/>
                <h-object title="WebService"/>
                <h-object title="WebService"/>
            </div>
        </objects-card>
        <objects-card grow="2" title="Проекты">
            <div class="projects__content">
                <h-object title="WebService"/>
                <h-object title="PrintServer"/>
                <h-object title="CreditBroker"/>
                <h-object title="WebClient"/>
                <h-object title="CIF"/>
                <h-object title="Reporting-service"/>
                <h-object title="WPS"/>
            </div>
        </objects-card>
        <objects-card grow="2" title="Сервисы">
            <div class="ws__content">
                <h-object title="WebService"/>
                <h-object title="PrintServer"/>
                <h-object title="CreditBroker"/>
                <h-object title="WebClient"/>
                <h-object title="CIF"/>
                <h-object title="Reporting-service"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
                <h-object title="WPS"/>
            </div>
        </objects-card>
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
        flex-direction: row;
        width: 100%;
    }

    .environments__content > div,
    .projects__content > div,
    .ws__content > div {
        margin: 6px;
    }
</style>
