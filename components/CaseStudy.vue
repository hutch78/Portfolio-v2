<template>
    <nuxt-link class="case-study-card" :to="'/case-studies/' + id">
        <article>
            <div v-if="caseStudy._embedded['wp:featuredmedia']" class="case-study-card__featured-image" :style="{'backgroundImage': 'url(' + caseStudy._embedded['wp:featuredmedia'][0]['source_url'] + ')'}" />
            <div class="case-study-card__body">
                <div class="content-wrapper">
                    <h3 class="case-study-card__title">
                        {{ caseStudy.title.rendered }}
                    </h3>
                    <div class="case-study-card__excerpt" v-html="caseStudy.excerpt.rendered" />
                </div>
                <div class="line-btn">
                    <span class="line" />
                    <span class="the-text">View Case Study &rarr;</span>
                    <span class="text-hover">Take Me There &rarr;</span>
                </div>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    props: ['caseStudy', 'id', 'title', 'excerpt']
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/core/variables';

    .case-study-card {
        display: block;
        margin: 0 1rem;
            box-shadow: 0px 2px 10px 1px rgba(0,0,0,.005);
            transform: translateY(0);
        will-change: transform, box-shadow;
        text-decoration: none;
        transition: all .2s ease-out;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,.5);
        margin-bottom: 2rem;

        @media screen and (min-width: 1030px){
            border: 1px solid rgba(255,255,255,0);
            width: 49%;
            margin: 0 2% 5% 0;
            &:nth-child(2n){
                margin-right: 0;
            }
        }

        &:hover {
            box-shadow: 0px 6px 20px 1px rgba(0,0,0,.075);
            transform: translateY(-10px);
            border: 1px solid rgba(255,255,255,.5);
        }

        &__featured-image {
            height: 0;
            position: relative;
            padding-bottom: 46%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        &__body {
            padding: 2rem;
            p {
                color: $text-light;
            }
        }

        &__title {
            margin-top: 0;
            margin-bottom: 2rem;
            font-size: 1.6rem;
            letter-spacing: -1px;
            color: $color-primary;
        }

        .line-btn {
            margin-top: 2rem;
        }
    }

</style>
