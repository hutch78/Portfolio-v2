<template>
    <main class="page page--home">
        <h1 class="page-title">
            About Me
        </h1>
        <div class="content-wrapper">
            <p class="body-copy">
                My name is Jeremy Hutchcraft and I am an Orlando Web Developer with a tremendous passion for both writing code &amp; design. My world consists of my little girl who was born on November 21, my 7 year old stepson, and a woman I am lucky enough to call my fiancee. I work remotely as a Senior Web Engineer at <a href="http://renterswarehouse.com" title="Renters Warehouse" target="_blank"><strong>Renters Warehouse</strong></a>. I've definitely found my passion in solving problems, and bringing ideas\designs to life. I take pride in delivering projects that make sure disabled users are a priority, not an afterthought. I have done a lot of testing with assistive technology to get a better idea of what disabled users are up against.
            </p>
            <p class="body-copy">
                I am a proud <a href="http://www.ucf.edu" target="_blank"><strong>UCF ALUMNI</strong></a> and learning is one of my greatest passions; I pick up new things very quickly. Pre-children, I enjoyed going to music festivals, and touring local breweries in search of a <a href="https://crookedcan.com/brews/">nice strong IPA</a>.
            </p>
            <p class="body-copy">
                I have decided I wanted to spend my life being creative. I have always been drawn to art, digital media, and various other forms of creativity such as <a href="https://soundcloud.com/the_hutch/tracks">making music</a>. I'm looking forward to accomplishing big things, and I hope to meet a lot of cool people along the way. Thanks for checking out my site.
            </p>

            <blockquote>
                <p style="font-size: 1.6rem">
                    "If a thing is worth doing, it's worth doing right"
                </p>
            </blockquote>

            <nuxt-link :to="`/case-studies/`" class="line-btn">
                <span class="line" />
                <span class="the-text">Ready to see what I can do? &rarr;</span>
                <span class="text-hover">Check out my portfolio &rarr;</span>
            </nuxt-link>
        </div>
    </main>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style lang="scss">

  .page.page--home {
    .page-title {
    //   max-width: 450px;
      margin: 0 auto 2rem;
    //   text-align: center;
    }
  }

  .content-wrapper {
    blockquote + .line-btn {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
  }

</style>
