<template>

  <div class="page-lauout" ref="layoutTop">


    <!--s: banner top-->
    <Banner ref="myBannerchild"></Banner>
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

    <!--s: Serves-->
    <Serves ref="myServechild" v-on:serveFun="serveFun"></Serves>
    <!--e: Serves-->

    <!--s: Info-->
    <Info ref="myInfochild" v-on:infoFun="infoFun"></Info>
    <!--e: Info-->

    <!--s: Matching-->
    <Matching></Matching>
    <!--e: Matching-->

    <!--s: MatchingView-->
    <MatchingView ref="myMatchingViewchild" v-on:matchViewFun="matchViewFun"></MatchingView>
    <!--e: MatchingView-->

    <!--s: Footer-->
    <Footer></Footer>
    <!--e: Footer-->


  </div>

</template>
<script>
  import Banner from '@/components/rc-banner-top'
  import Modular from '@/components/rc-modular'
  import History from '@/components/rc-history'
  import RcModuleWrap from '@/components/rc-module-wrap'
  import Serves from '@/components/rc-serve'
  import Info from '@/components/rc-info'
  import Matching from '../components/rc-matching'
  import MatchingView from '../components/rc-matching-view'
  import Footer from '@/components/rc-footer'

  export default {
    name: 'app',
    components:{ Banner,Modular,History,RcModuleWrap,Serves,Info,Matching,MatchingView,Footer },
    data () {
      return {
        clientHeight:window.innerHeight,    //窗口高度
        modularObj:{},
        historyKey:'',
        moduleKey:'',
        serveKey:'',
        layoutTop:'',
        infoObj:{},
        matchViewObj:{},
      }
    },
    methods:{
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let modularObj={};
        let infoObj={};
        let matchViewObj={};
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
        if(scrollTop>this.infoObj.infoTop+this.layoutTop-this.clientHeight){
          infoObj = {"infoTop":true,"chatTop":false}
        }else{
          infoObj = {"infoTop":false,"chatTop":false}
        }
        if(scrollTop>this.infoObj.chatTop+this.layoutTop-this.clientHeight){
          infoObj = {"infoTop":true,"chatTop":true}
        }
        this.$refs.myInfochild.parentInfoClick(infoObj)

        if(scrollTop>this.matchViewObj.layoutTop+this.layoutTop-this.clientHeight){
          matchViewObj = {"layoutTop":true,"layoutTitle":false,"layoutBar":false}
        }else{
          matchViewObj = {"layoutTop":false,"layoutTitle":false,"layoutBar":false}
        }
        if(scrollTop>this.matchViewObj.layoutTitle+this.layoutTop-this.clientHeight){
          matchViewObj = {"layoutTop":true,"layoutTitle":true,"layoutBar":false}
        }
        if(scrollTop>this.matchViewObj.layoutBar+this.layoutTop-this.clientHeight){
          matchViewObj = {"layoutTop":true,"layoutTitle":true,"layoutBar":true}
        }
        this.$refs.myMatchingViewchild.parentMatchingClick(matchViewObj)

      },
      modularFun(obj){
        this.modularObj = obj
      },
      historyFun(key){
        this.historyKey = key;
      },
      moduleFun(key){
        this.moduleKey = key
      },
      serveFun(key){
        this.serveKey = key
      },
      infoFun(obj){
        this.infoObj = obj
      },
      matchViewFun(obj){
        this.matchViewObj = obj
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
      this.$refs.myBannerchild.parentBannerClick(this.historyKey+this.layoutTop-10);
    },
  }
</script>

<style>


</style>


