<template>
    <header class="header">
        <logo class="header__logo"/>
        <user class="header__user" username="Drakula Drakula Drakula"/>
        <navigation class="header__navigation"/>
    </header>
</template>

<script>
    import Navigation from "./Navigation";
    import User from "./User";
    import Logo from "./Logo";

    export default {
        name: "Header",
        components: {Navigation, User, Logo}
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .header__navigation {
        width: 100%;
    }

    @media screen and (max-width: 540px) {
        .header__logo {
            display: none;
        }

        .header__navigation {
            min-height: 50px;
        }

        .header__user {
            min-height: 30px;
        }

        .header {
            justify-content: flex-end;
        }
    }
</style>
