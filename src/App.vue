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
        padding: 2% 8%;
    }

    body {
        margin: 0;
        background-color: $bg-color;
    }

    main {
        margin-top: 18px;
    }

    .card-wrapper {
        position: relative;
        background-color: $light-primary-color;
        border-radius: $primary-border-radius;
        margin: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        height: 100%;
        &::before {
            -webkit-transition: box-shadow 0.2s ease; /* Safari */
            transition: box-shadow 0.2s ease;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            z-index: -1;
        }
    }
</style>

<script>
    import Header from "./components/Header";

    export default {
        components: {Header}
    };
</script>
