<template>

  <div class="page-lauout">


    <!--s: banner top-->
    <Banner></Banner>
    <!--e: banner top-->

    <!--s: modular top-->
    <Modular ref="mychild" :title="title" v-on:allTitle="allTitle"></Modular>
    <!--e: modular top-->


  </div>

</template>
<script>
  import Banner from '@/components/rc-banner-top'
  import Modular from '@/components/rc-modular'
  export default {
    name: 'app',
    components:{ Banner,Modular },
    data () {
      return {
        clientHeight:window.innerHeight,    //窗口高度
        alltitle:'',
        title:false
      }
    },
    methods:{
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>this.alltitle-this.clientHeight){
          console.log(3)
          this.title = true
          this.$refs.mychild.parentHandleclick(true)
        }else{
          this.$refs.mychild.parentHandleclick(false)
        }
      },
      allTitle(msg){
        this.alltitle = msg
      }
    },
    mounted () {
      let _this = this;
      window.addEventListener('scroll', this.handleScroll);
      window.onresize = () => {
        return (() => {
          _this.clientHeight = window.innerHeight;
        })()
      }
    },
    created(){
    }
  }
</script>

<style>


</style>


