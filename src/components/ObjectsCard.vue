<template>
    <div class="homer-object-card" v-bind:style="{ flexGrow: grow }">
        <div class="homer-object-card__title">
            {{title}}
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ObjectsCard",
        props: {
            grow: Number,
            title: String,
            objects: []
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";

    .homer-object-card {
        position: relative;
        background-color: $light-primary-color;
        border-radius: $primary-border-radius;
        margin: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        height: 100%;

        &::before {
            -webkit-transition: box-shadow 0.2s ease; /* Safari */
            transition: box-shadow 0.2s ease;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            z-index: -1;
        }
    }
</style>