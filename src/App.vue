<template>
    <div class="app">
        <Header/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style lang="scss">
    @import "styles/variables/color.scss";
    @import "styles/variables/border.scss";

    .app {
        font-family: StemWebMedium, Helvetica Neue, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
        margin: 2% 8%;
        width: 100%;
        max-width: 850px;
    }

    body {
        margin: 0;
        background-color: $bg-color;
        display: flex;
        justify-content: center;
    }

    main {
        margin-top: 18px;
    }

    .row {
        display: flex;
    }
</style>

<script>
    import Header from "./components/Header";

    export default {
        components: {Header}
    };
</script>
