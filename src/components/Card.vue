<template>
    <div class="card" :style="{background: color}">
        <slot name="content">
            <div class="card__content_default">
                Нет информации :(
            </div>
        </slot>
        <slot name="footer"/>
    </div>
</template>

<script>

    export default {
        name: "Card",
        props: {
            title: String,
        },
        data: function () {
            return {
                color: intToHSL(hashCode(this.title))
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
        let shortened = int * 5 % 30 + 220;
        return "hsl(" + shortened + ", 75%, 60%)";
    }
</script>

<style lang="scss">
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

        &__content {
            &_default {
                color: white;
                width: 100%;
                font-size: 18px;
                text-align: center;
                padding-top: 5%;
                padding-bottom: 5%;
            }
        }
    }
</style>