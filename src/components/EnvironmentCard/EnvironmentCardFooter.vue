<template>
    <div class="card__footer">
        <div class="card__title">{{title}}</div>
        <div class="card__actions">
            <div class="card__actions_interactive card__actions_favourite">
                <div class=" card__footer-button card__content-favourite_button">
                    <fai icon="star" size="sm"/>
                </div>
            </div>
            <div class="card__actions_interactive card__actions_filter">
                <div class="card__footer-button card__content-filter_button" @click="toggleFilterInput">
                    <fai icon="filter" size="sm"/>
                </div>
                <div v-show="!isFilterInputHidden" class="card__content-filter-input">
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

        &__title {
            padding: 6px;
            flex-grow: 1;
        }

        &__footer {
            color: white;
            font-weight: bold;
            position: relative;
            text-align: left;
            display: flex;
            margin-top: auto;
        }


        &__content {
            &_default {
                width: 100%;
                font-size: 18px;
                text-align: center;
                padding-top: 5%;
                padding-bottom: 5%;
            }
        }

        &__content-filter-input {
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
                }
            }
        }

        &__footer-button {
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