<template>

  <section class="banner-container">

    <div class="banner-box style rc-fadeinB">

      <div class="layout">

        <!--s: logo-->
        <Logo></Logo>
        <!--e: logo-->

        <div class="layer center-header">

          <h1 class="rc-fadeinB">Bigger than Imagination.</h1>
          <p class="banner-desc rc-fadeinB delay_2">A person’s view can make everything bigger, you’re not wrong.</p>
          <p class="banner-desc desc-right rc-fadeinL delay_5">--Riley</p>

        </div>

        <div class="banner-link-btn">

          <a href="javascript:" class="common-learn">Learn more</a>
          <a href="javascript:" class="common-view">View video</a>

        </div>


      </div>

    </div>

  </section>

</template>

<script>
    import Logo from '@/components/rc-logo'
    export default {
        name: "app",
        components:{ Logo }
    }
</script>

<style scoped>

</style>
