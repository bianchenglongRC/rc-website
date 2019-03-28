<template>

  <div class="page-lauout" ref="layoutTop">


    <!--s: banner top-->
    <Banner></Banner>
    <!--e: banner top-->

    <!--s: modular-->
    <Modular ref="myModularchild" v-on:modularFun="modularFun"></Modular>
    <!--e: modular-->

    <!--s: history-->
    <History ref="myHistorychild" v-on:historyFun="historyFun"></History>
    <!--e: history-->

    <!--s: RcModuleWrap-->
    <RcModuleWrap ref="myModulechild" v-on:moduleFun="moduleFun"></RcModuleWrap>
    <!--e: RcModuleWrap-->

    <!--s: history ref="myServeschild" v-on:historyFun="historyFun"-->
    <Serves ref="myServechild" v-on:serveFun="serveFun"></Serves>
    <!--e: history-->


  </div>

</template>
<script>
  import Banner from '@/components/rc-banner-top'
  import Modular from '@/components/rc-modular'
  import History from '@/components/rc-history'
  import RcModuleWrap from '@/components/rc-module-wrap'
  import Serves from '@/components/rc-serve'
  export default {
    name: 'app',
    components:{ Banner,Modular,History,RcModuleWrap,Serves },
    data () {
      return {
        clientHeight:window.innerHeight,    //窗口高度
        modularObj:{},
        historyKey:'',
        moduleKey:'',
        serveKey:'',
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
        if(scrollTop>this.historyKey+this.layoutTop-this.clientHeight){
          this.$refs.myHistorychild.parentHistoryClick(true)
        }else{
          this.$refs.myHistorychild.parentHistoryClick(false)
        }
        if(scrollTop>this.moduleKey+this.layoutTop-this.clientHeight){
          this.$refs.myModulechild.parentModuleClick(true)
        }else{
          this.$refs.myModulechild.parentModuleClick(false)
        }
        if(scrollTop>this.serveKey+this.layoutTop-this.clientHeight){
          this.$refs.myServechild.parentServeClick(true)
        }else{
          this.$refs.myServechild.parentServeClick(false)
        }
      },
      modularFun(obj){
        this.modularObj = obj
      },
      historyFun(key){
        this.historyKey = key
      },
      moduleFun(key){
        this.moduleKey = key
      },
      serveFun(key){
        this.serveKey = key
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


