<template>
    <main class="page page--portfolio-item-single">
        <h1 class="page-title" v-html="caseStudy.title.rendered" />
        <img v-if="caseStudy._embedded['wp:featuredmedia']" class="single-case-study__featured-image" :src="caseStudy._embedded['wp:featuredmedia'][0]['source_url']" alt="">
        <div class="single-case-study__content content-wrapper" v-html="caseStudy.content.rendered" />
    </main>
</template>

<script>
import axios from 'axios'

export default {
    components: {
    },
    data () {
        return {
            caseStudy: ''
        }
    },
    //   middleware: 'blog',
    asyncData ({ params }) {
        return axios.get(`https://jhutchcraft.com/wp-json/wp/v2/case_studies/${params.id}?_embed`)
            .then((response) => { return { caseStudy: response.data } })
    }
}
</script>

<style lang="scss">

  @import 'assets/scss/core/variables';

  .content-wrapper {
    h2, h3, h4, h5, h6 {
      color: $colts-blue;
      margin-bottom: .5em;
    }
    p {
      color: $text-light;
    }
    &__content {
    }

  }

  .single-case-study {
    &__featured-image {
      display: block;
      max-width: 100%;
      margin-bottom: 4rem;
    }
  }

</style>
