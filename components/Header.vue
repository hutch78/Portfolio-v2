<template>
    <header class="main-header">
        <div class="main-header__intro">
            <h1 class="main-header__title">
                Jeremy Hutchcraft
            </h1>
            <h2 class="main-header__sub-title">
                Dad, Developer, &amp; Designer
            </h2>
        </div>
        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__list__item">
                    <nuxt-link class="main-nav__list__link" to="/case-studies">
                        Case Studies
                    </nuxt-link>
                </li>
                <li class="main-nav__list__item">
                    <nuxt-link class="main-nav__list__link" to="/">
                        About Me
                    </nuxt-link>
                </li>
                <li class="main-nav__list__item">
                    <nuxt-link class="main-nav__list__link" to="/blog">
                        Blog
                    </nuxt-link>
                </li>
                <li class="main-nav__list__item">
                    <a href="mailto:hutch78@me.com" class="main-nav__list__link" title="Shoot me an email">Contact Me</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

    @import '../assets/scss/core/variables';

    body {
        background-color: #333;
    }

    .container {
        max-width: 78rem;
        margin: 0 auto;
    }
    .main-header {
        padding: 2rem 0;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        @media screen and (min-width: 64.375rem){
            display: flex;
        }

        > .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__title {
            color: $color-primary;
            font-size: 1rem;
            @media screen and (min-width: 64.375rem){
                font-size: 2rem;
            }
        }
        &__sub-title {
            font-family: 'Roboto';
            font-weight: 400;
            text-transform: uppercase;
            font-size: .875rem;
            letter-spacing: 2px;
        }
    }
    .main-nav {
        // margin-top: 2rem;
        &__list {
            list-style-type: none;
            margin-top: 2rem;

            @media screen and (min-width: 64.375rem){
                margin-top: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            &__item {
                margin: 0 .5rem;
                &--emphasized {
                    .main-nav__list__link {
                       border-radius: 10px;
                        background-color: $colts-blue;
                        color: white;
                        @media screen and (min-width: 1030px){
                            &:hover {
                                color: white;
                            }
                        }
                    }
                }
            }
            &__link {
                display: block;
                color: white;
                text-transform: uppercase;
                font-weight: 400;
                text-decoration: none;
                font-size: .875rem;
                letter-spacing: 2px;
                padding: 1rem;
                @media screen and (min-width: 1030px){
                    transition: all 0.2s ease-in;
                    &:hover {
                        color: $color-primary;
                    }
                }
                &.nuxt-link-exact-active {
                    border-radius: 10px;
                    border: 1px solid $colts-blue;
                }
            }
        }
    }
</style>
