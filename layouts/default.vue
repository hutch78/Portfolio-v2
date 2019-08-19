<template>
    <div class="layout-wrapper">
        <Header />
        <div class="site-content">
            <div class="container">
                <nuxt />
            </div>
        </div>
        <TransitionBars />

        <footer class="main-footer">
            <div class="container">
                <h2>Like what you see?</h2>
                <a
                    href="mailto:hutch78@me.com"
                    class="line-btn"
                    title="Send me an email to hutch78@me.com"
                >
                    <span class="line" />
                    <span class="the-text">Get in Touch &rarr;</span>
                    <span class="text-hover">Let's Chat &rarr;</span>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TransitionBars from '@/components/TransitionBars'

export default {
    components: {
        Header,
        TransitionBars
    }
}
</script>

<style lang="scss">
@import "../assets/scss/core/variables";
main.page {
  padding: 4rem 0;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
}

.site-content {
  perspective: 500px;
  padding: 0 2rem;
  @media screen and (min-width: 64.375rem){
    padding: 0;
  }
  .page {
    &:not(.page--portfolio) {
      max-width: 800px;
      margin: 0 auto;
    }
  }
}

.main-footer {
  padding: 2rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  .line-btn {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.transition-bars {
  position: fixed;
  z-index: 100;
  pointer-events: none;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .bar {
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    transition: all 0.4s ease-out;
    &.bar-1 {
      background-color: $color-primary;
    }
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
