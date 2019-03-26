<template>

  <div class="page-lauout" ref="layoutTop">


    <!--s: banner top-->
    <Banner></Banner>
    <!--e: banner top-->

    <!--s: modular-->
    <Modular ref="myModularchild" v-on:modularFun="modularFun"></Modular>
    <!--e: modular-->

    <!--s: history-->
    <History></History>
    <!--e: history-->


  </div>

</template>
<script>
  import Banner from '@/components/rc-banner-top'
  import Modular from '@/components/rc-modular'
  import History from '@/components/rc-history'
  export default {
    name: 'app',
    components:{ Banner,Modular,History },
    data () {
      return {
        clientHeight:window.innerHeight,    //窗口高度
        modularObj:{},
        layoutTop:'',
      }
    },
    methods:{
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let modularObj={};
        if(scrollTop>this.modularObj.title+this.layoutTop-this.clientHeight){
           modularObj = {"title":true,"liT":false,"liB":false}
        }else{
           modularObj = {"title":false,"liT":false,"liB":false}
        }
        if(scrollTop>this.modularObj.liT+this.layoutTop-this.clientHeight){
           modularObj = {"title":true,"liT":true,"liB":false}
        }
        if(scrollTop>this.modularObj.liB+this.layoutTop-this.clientHeight){
           modularObj = {"title":true,"liT":true,"liB":true}
        }
        this.$refs.myModularchild.parentModularClick(modularObj)
      },
      modularFun(obj){
        this.modularObj = obj
      }
    },
    mounted () {
      let _this = this;
      _this.layoutTop = Math.abs(this.$refs['layoutTop'].getBoundingClientRect().top)
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


