<template>
    <nav class="navigation">
        <router-link to="/services" class="nav__button">
            <div class="container__link">
                <fai icon="cubes" size="1x"/>
                <span>Сервисы</span>
            </div>
        </router-link>
        <router-link to="/favourites" class="nav__button">
            <div class="container__link">
                <fai icon="star" size="1x"/>
                <span>Избранные</span>
            </div>
        </router-link>
        <router-link to="/settings" class="nav__button">
            <div class="container__link">
                <fai icon="cog" size="1x"/>
                <span>Настройки</span>
            </div>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    };
</script>



<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";
    @import "../styles/variables/shadow.scss";

    .navigation {
        display: flex;
        justify-content: space-evenly;
    }

    .navigation > * {
        color: $primary-text-color;
    }

    .container__link {
        display: flex;
        width: 100%;
        align-content: center;
        justify-content: center;
        padding-bottom: 4px;
        padding-top: 4px;
    }

    .container__link * {
        margin-left: 4px;
    }

    span {
        text-align: center;
        font-size: 12px;
    }

    a {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
    }

    .nav__button {
        position: relative;
        width: 100%;
        -webkit-transition: border 0.2s ease; /* Safari */
        transition: border 0.2s ease;
        background-color: $light-primary-color;
        border-right: 1px $divider-color solid;
        &::before {
            -webkit-transition: box-shadow 0.2s ease; /* Safari */
            transition: box-shadow 0.2s ease;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            @include box-shadow(1);
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            z-index: -1;
        }
        &:hover::after {
            content: "";
            width: 100%;
            height: 100%;
            transform: translateY(-95%);
            position: absolute;
            border-bottom: 2px solid $accent-color;
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            z-index: 2;
        }
    }


    .router-link-active::before {
        @include box-shadow(3);
        transition: box-shadow 0.2s ease;
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        z-index: 1;
    }

    .navigation .nav__button:first-child {
        border-bottom-left-radius: $primary-border-radius;
    }

    .navigation .nav__button:last-child {
        border-bottom-right-radius: $primary-border-radius;
    }
</style>
