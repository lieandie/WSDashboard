<template>
    <div class="header__user">
        <div class="header__username">{{username}}</div>
        <div class="header__user-exit">
            <fai icon="door-open" size="sm"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
            username: String
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables/color.scss";
    @import "../styles/variables/border.scss";

    .header__user {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: $accent-color;
        color: $accent-text-color;
        padding: 2px 6px;
        border-top-right-radius: $primary-border-radius;
    }

    .header__username {
        margin-right: 8px;
        font-size: 14px;
    }

    .header__user-exit {
        cursor: pointer;
    }
</style>