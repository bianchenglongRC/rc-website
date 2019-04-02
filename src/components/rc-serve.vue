<template>

  <section class="layout" ref="serveTop" :class="serveBol?'is-revealed':''">


    <div class="rc-serves">


      <!--s: serves head-->
      <div class="rc-main-serve-head">

        <h1 class="rc-main-head" :class="serveBol?'rc-fadeinR':''"><b>Products</b><p>and Services</p></h1>

        <p class="rc-main-head-info" :class="serveBol?'rc-fadein delay_5':''">

          Riley Cillian's products continue to grow in international markets with a world of creators and content. As of March 2019, Riley Cillian's products are available in over 40 countries and markets including India, southeast Asian countries, the Middle East, Turkey, Europe, Latin America.

        </p>

      </div>
      <!--e: serves head-->

      <!--s: serves map-->
      <div class="rc-serve-map">

        <div class="rc-map rc-flag-map"></div>

         <div class="rc-serve-bar">

           <span class="rc-serve-lovu rc-lovu-svg" :class="serveBol?'rc-rotatein':''"></span>
           <span class="rc-serve-chat rc-livechat-svg" :class="serveBol?'rc-rotatein delay_5':''"></span>

         </div>

        <div class="point-area flags-gb">

          <span class="serve-flags rc-flag rc-flag-icon-gb"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-se">

          <span class="serve-flags rc-flag rc-flag-icon-se"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-de">

          <span class="serve-flags rc-flag rc-flag-icon-de"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-es">

          <span class="serve-flags rc-flag rc-flag-icon-es"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-fr">

          <span class="serve-flags rc-flag rc-flag-icon-fr"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-ch">

          <span class="serve-flags rc-flag rc-flag-icon-ch"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-at">

          <span class="serve-flags rc-flag rc-flag-icon-at"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-it">

          <span class="serve-flags rc-flag rc-flag-icon-it"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-fi">

          <span class="serve-flags rc-flag rc-flag-icon-fi"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-ru">

          <span class="serve-flags rc-flag rc-flag-icon-ru"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-tr">

          <span class="serve-flags rc-flag rc-flag-icon-tr"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-il">

          <span class="serve-flags rc-flag rc-flag-icon-il"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-eg">

          <span class="serve-flags rc-flag rc-flag-icon-eg"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-sa">

          <span class="serve-flags rc-flag rc-flag-icon-sa"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-ae">

          <span class="serve-flags rc-flag rc-flag-icon-ae"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-pk">

          <span class="serve-flags rc-flag rc-flag-icon-pk"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-in">

          <span class="serve-flags rc-flag rc-flag-icon-in"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-lk">

          <span class="serve-flags rc-flag rc-flag-icon-lk"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-th">

          <span class="serve-flags rc-flag rc-flag-icon-th"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-vn">

          <span class="serve-flags rc-flag rc-flag-icon-vn"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-my">

          <span class="serve-flags rc-flag rc-flag-icon-my"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-id">

          <span class="serve-flags rc-flag rc-flag-icon-id"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-au">

          <span class="serve-flags rc-flag rc-flag-icon-au"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-ph">

          <span class="serve-flags rc-flag rc-flag-icon-ph"></span>

          <div class="point point-10"></div>
          <div class="point point-70"></div>

        </div>

        <div class="point-area flags-kr">

          <span class="serve-flags rc-flag rc-flag-icon-kr"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

        <div class="point-area flags-jp">

          <span class="serve-flags rc-flag rc-flag-icon-jp"></span>

          <div class="point point-10"></div>
          <div class="point point-40"></div>
          <div class="point point-shadow point-80"></div>

        </div>

      </div>
      <!--s: serves map-->


    </div>


  </section>

</template>

<script>
  export default {
    name: "app",
    data () {
      return {
        serveBol:false
      }
    },
    methods:{
      offsetTop () {
        let serveTop = this.$refs['serveTop'].getBoundingClientRect().top;
        this.$emit('serveFun',serveTop)
      },
      parentServeClick(bol){
        this.serveBol = bol
      }
    },
    mounted(){
      this.offsetTop()
    }
  }
</script>

<style scoped>

</style>
