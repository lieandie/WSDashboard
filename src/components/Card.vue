<template>
    <div class="card">
        <slot/>
        <div class="card__bottom" v-bind:style="{background: color}">
            <div class="card__title">{{title}}</div>
            <div class="card__content-filter">
                <label>
                    <input type="text">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
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

    .card {
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

    .card__bottom {
        color: white;
        padding: 6px;
        font-weight: bold;
        background-color: $bg-header-color;
        position: relative;
        text-align: left;
        display: flex;
    }


    .card__title {
        padding: 0;
        margin: 0 auto 0 0;
    }

    .card__content-filter {
        & input[type=text] {
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
        }
    }

</style>