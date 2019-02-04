<template>
    <div class="card">
        <slot/>
        <div class="card__bottom" :style="{background: color}">
            <div class="card__title">{{title}}</div>
            <div class="card__content-filter">
                <label>
                    <input v-model="filter" type="text">
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
                color: intToHSL(hashCode(this.title)),
                filter: ""
            };
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
        flex-grow: 2;

        & input[type=text] {
            background-color: transparent;
            color: rgba(255, 255, 255, 0.5);
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            outline: none;
            width: 100%;
        }
    }

</style>