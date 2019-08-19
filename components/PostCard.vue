<template>
    <div class="post-card">
        <div class="post-card__header">
            <span class="post-card__post-date">Posted {{ post.date }}</span>
        </div>
        <div class="post-card__body content-wrapper">
            <h2 class="post-card__title">
                <nuxt-link :to="`/blog/${post.id}`" v-html="post.title.rendered">
                    Title
                </nuxt-link>
            </h2>
            <p v-html="post.excerpt.rendered">
                Excerpt
            </p>
        </div>
        <div class="post-card__footer">
            <nuxt-link :to="`/blog/${post.id}`" class="line-btn">
                <span class="line" />
                <span class="the-text">Read full Article &rarr;</span>
                <span class="text-hover">Take Me There &rarr;</span>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/core/variables";
@import "../assets/scss/core/mixins";

.post-card {
  padding: 3rem 0;
  margin-bottom: 1rem;
  // border: 1px solid #e7e7e7;

  &__title,
  &__body {
    margin-bottom: 1rem;
    color: $color-primary;
  }

  &__title {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -1px;

    a {
      font-family: "Playfair Display", serif;
      text-decoration: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $color-primary;
      box-shadow: inset 0 -3px 0 $color-primary;
      overflow-wrap: break-word;
      word-break: break-word;
      word-wrap: break-word;
      transition: all 0.2s ease-in;

      &:hover {
        background-color: $color-primary;
        color: white;
      }
    }
  }

  p {
    color: $text-light;
  }

  .read-more {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &__post-date {
    font-family: "Roboto";
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    display: inline-block;
    color: $text-light;
  }
}

.content-wrapper {
  h2,
  h3,
  h4 {
    @include sans-serif(400);
  }
}
</style>
