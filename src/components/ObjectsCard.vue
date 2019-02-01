<template>
    <div class="objects-card">
        <slot/>
        <div class="objects-card__title" v-bind:style="{background: color}">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ObjectsCard",
        props: {
            title: String,
            objects: []
        },
        data: function () {
            return {
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";
    @import "../styles/variables/shadow.scss";

    .objects-card {
        position: relative;
        background-color: $light-primary-color;
        border-radius: $primary-border-radius;
        @include box-shadow(1);
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        flex-wrap: wrap;
    }

    .objects-card > * {
        width: 100%;
    }

    .objects-card div:first-child {
        margin-bottom: auto;
    }

    .objects-card__title {
        color: white;
        padding: 6px;
        font-weight: bold;
        background-color: $bg-header-color;
        align-self: end;
        position: relative;
        text-align: left;
    }

</style>