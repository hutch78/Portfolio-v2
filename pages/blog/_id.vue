<template>
    <main class="page page--single-post">
        <div v-if="post" class="single-post-wrapper">
            <h1 class="single-post__title page-title" v-html="post.title.rendered">
                Title
            </h1>

            <div class="single-post__content content-wrapper" v-html="post.content.rendered" />
        </div>
        <div v-if="!post" class="loader">
            Loading...
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    components: {
    },
    data () {
        return {
            post: ''
        }
    },
    //   middleware: 'blog',
    asyncData ({ params }) {
        return axios.get(`https://jhutchcraft.com/wp-json/wp/v2/posts/${params.id}`)
            .then((response) => {
                return { post: response.data }
            })
    }
}
</script>

<style lang="scss">

    @import 'assets/scss/core/variables';
    @import 'assets/scss/core/mixins';

    .single-post-wrapper {
      max-width: 800px;
      margin: 0 auto;

      .single-post__title {
        margin-bottom: 4rem;
      }

      .single-post__content {
        > p {
          &:first-child {
            &:first-letter {
              color: white;
              float: left;
              // @include serif;
              font-weight: 800;
              margin-right: .35rem;
              font-size: 1.6rem;
              line-height: 24px;
              padding: 0.55rem .85rem;
              text-align: center;
              font-weight: 700;
              background-color: $colts-blue;
              border-radius: 100%;
              // position: relative;
              // top: 20px;
              // transform: translate3d(0,20px,0);
            }
          }
        }

        blockquote {
          padding-left: 2.5rem;
          &:before {
            width: .5rem;
          }
          p {
            font-size: 2.35rem;
          }
        }

      }

    }

</style>
