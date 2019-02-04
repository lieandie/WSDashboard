<template>
    <div class="card">
        <slot name="content">
            <div class="card__content_default">
                Нет информации :(
            </div>
        </slot>
        <div class="card__bottom" :style="{background: color}">
            <div class="card__title">{{title}}</div>
            <div class="card__content-filter">
                <div class="card__content-filter_button" @click="toggleFilterInput">
                    <fai icon="filter"/>
                </div>
                <div :class="{hidden:isFilterInputHidden}" class="card__content-filter_input">
                    <label>
                        <input v-model="filterExpression" type="text">
                    </label>
                </div>
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
                color: intToHSL(hashCode(this.title)),
                filterExpression: "",
                isFilterInputHidden: true
            };
        },
        methods: {
            toggleFilterInput: function () {
                this.isFilterInputHidden = !this.isFilterInputHidden;
            }
        }
    }

    function hashCode(string) {
        let hash = 0;
        if (string.length === 0) return hash;
        for (var i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }

    function intToHSL(int) {
        let shortened = int * 5 % 360;
        return "hsl(" + shortened + ", 50%, 50%)";
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
        flex-grow: 1;
    }

    .card__content-filter {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        & input[type=text] {
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            width: 100%;
            margin-bottom: -1px;
        }
    }

    .card__content_default {
        width: 100%;
        font-size: 18px;
        text-align: center;
        padding-top: 5%;
        padding-bottom: 5%;

    }

    .card__content-filter_input {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        transition: width .5s ease-in-out;
    }

    .card__content-filter_button {
        margin-right: 2px;
    }

    .hidden {
        width: 0;
    }

</style>