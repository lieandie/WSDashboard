<template>
    <div class="objects-card">
        <slot/>
        <div class="objects-card__title" v-bind:style="{background: color}">
            <div class="title">{{title}}</div>
            <div class="filter">
                <label>
                    <input type="text">
                </label>
            </div>
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

        div:first-child {
            margin-bottom: auto;
        }
    }

    .objects-card__title {
        color: white;
        padding: 6px;
        font-weight: bold;
        background-color: $bg-header-color;
        position: relative;
        text-align: left;
        display: flex;
    }

    input[type=text] {
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: 1px solid white;
        outline: none;
    }

    .title {
        padding: 0;
        margin: 0 auto 0 0;
    }

</style>