<template>
    <div class="environment-card-footer">
        <div class="environment-card-footer__title">{{title}}</div>
        <div class="environment-card-footer__actions">
            <div class="environment-card-footer__actions_interactive environment-card-footer__actions_favourite">
                <div class=" environment-card-footer__button environment-card-footer__favourite_button">
                    <fai icon="star" size="sm"/>
                </div>
            </div>
            <div class="environment-card-footer__actions_interactive environment-card-footer__actions_filter">
                <div class="environment-card-footer__button environment-card-footer__filter_button"
                     @click="toggleFilterInput">
                    <fai icon="filter" size="sm"/>
                </div>
                <div v-show="!isFilterInputHidden" class="environment-card-footer__filter-input">
                    <label>
                        <input v-model="filterExpression" type="text" ref="filterInput">
                    </label>
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
        color: white;
        font-weight: bold;
        text-align: left;
        margin-top: auto;

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

            &_interactive {
                @include box-shadow(3);
                border-bottom-left-radius: $primary-border-radius;
            }

            &_filter {
                color: white;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;

                & input[type=text] {
                    background-color: transparent;
                    color: white;
                    border: none;
                    outline: none;
                    width: 100%;
                }
            }
        }

        &__button {
            margin: 2px 4px 2px 4px;
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