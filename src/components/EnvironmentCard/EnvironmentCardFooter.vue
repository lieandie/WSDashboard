<template>
    <div class="environment-card-footer">
        <div class="environment-card-footer__title">{{title}}</div>
        <div class="environment-card-footer__actions">
            <div class="environment-card-footer__actions_filter">
                <div class="environment-card-footer__filter-input">
                    <label>
                        <input v-model="filterExpression" type="text" ref="filterInput" placeholder="Фильтр">
                    </label>
                </div>
            </div>
            <div class=" environment-card-footer__actions_favourite">
                <div class=" environment-card-footer__button environment-card-footer__favourite_button">
                    <fai icon="star" size="sm"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EnvironmentCardFooter",
        props: {
            title: String
        },
        data: function () {
            return {
                filterExpression: "",
                isFilterInputHidden: true
            };
        },
        methods: {
            toggleFilterInput: function () {
                this.isFilterInputHidden = !this.isFilterInputHidden;
                if (!this.isFilterInputHidden) {
                    this.$nextTick(() => {
                        this.$refs.filterInput.focus();
                    })
                }
            },
            emitFilterExpressionChangedEvent: function () {
                this.$emit('filterExpressionChanged', this.filterExpression)
            }
        },
        watch: {
            filterExpression: function () {
                this.emitFilterExpressionChangedEvent();
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/variables/color";
    @import "../../styles/variables/border";
    @import "../../styles/variables/shadow";

    .environment-card-footer {
        position: relative;
        display: flex;
        overflow: hidden;
        flex-direction: row;
        width: 100%;
        color: $accent-text-color;
        font-weight: bold;
        text-align: left;
        margin-top: auto;
        background: rgba(0, 0, 0, 0.2);

        &__title {
            padding: 6px;
            flex-grow: 1;
        }

        &__filter-input {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
        }

        &__actions {
            display: flex;
            flex-direction: row;

            &_filter {
                color: white;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                background-color: rgba(0,0,0,.25);

                & input[type=text] {
                    padding-left: 4px;
                    background-color: transparent;
                    color: $accent-text-color;
                    border: none;
                    outline: none;
                    &::placeholder{
                       color: rgba(255,255,255, .3);
                    }
                }
            }
        }

        &__button {
            margin: 0 4px 0 4px;
            height: 100%;
            cursor: pointer;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
        }
    }
</style>