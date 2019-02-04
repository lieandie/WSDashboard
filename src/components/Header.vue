<template>
    <header class="header">
        <logo/>
        <user username="Drakula Drakula Drakula"/>
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

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .header__navigation {
        width: 100%;
    }

    .header__logo {
        fill: $accent-text-color;
    }
</style>
