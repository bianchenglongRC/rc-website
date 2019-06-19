<template>

  <section class="banner-container">

    <div class="banner-box style rc-fadeinB">

      <div class="layout-warp">

        <!--s: logo-->
        <Logo></Logo>
        <!--e: logo-->

        <div class="layer center-header">

          <h1 class="rc-fadeinB">In Algorithm and Crush we Believe.</h1>
          <p class="banner-desc rc-fadeinB delay_2">A person’s view can make everything bigger, you’re not wrong.</p>
          <p class="banner-desc desc-right rc-fadeinL delay_5">--Riley</p>

        </div>

        <div class="banner-link-btn">

          <a href="javascript:" class="common-learn" @click="scrollFun">Learn more</a>
          <!--<a href="javascript:" class="common-view">View video</a>-->

        </div>


      </div>

    </div>

  </section>

</template>

<script>
    import Logo from '@/components/rc-logo'
    export default {
        name: "app",
        components:{ Logo },
        data () {
          return {
            scrollKey:'',
          }
        },
        methods:{
          scrollFun(){
            document.documentElement.scrollTop = this.scrollKey
            document.body.scrollTop = this.scrollKey
          },
          parentBannerClick(key){
             this.scrollKey = key
          }
        },
    }
</script>

<style scoped>

</style>
