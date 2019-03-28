<template>

  <section class="layout" ref="infoTop">

    <div class="rc-serves">

      <!--s: lovu-->
      <div class="all-info-warp" >

        <!--s: title-->
        <h1 class="rc-main-head rc-info-title" :class="infoObj.infoTop?'rc-fadeinR':''"><b>Products</b><p>Info</p></h1>
        <!--e: title-->

        <div class="rc-info-warp">

          <div class="all-info-title">

            <span class="rc-icon rc-info-lovu" :class="infoObj.infoTop?'rc-rotatein':''"></span>
            <span class="rc-info-lovu-bg" :class="infoObj.infoTop?'rc-fadeinR delay_5':''"></span>

          </div>

          <p class="rc-info" :class="infoObj.infoTop?'rc-fadeinB delay_5':''">Powered by machine learning and deep learning algorithms, LovU is the largest AI dating platform in India and one of the most popular mobile platforms on the market. It provides users a unique, personalized and comprehensive way to find classic romance, enabling them to discover and explore themes of love and friendship.</p>

          <a href="javascript:" class="info-learn">Learn more</a>

        </div>

        <div class="rc-info-chat">

           <img src="../assets/rc-info-img1.png" class="rc-chat-l" :class="infoObj.infoTop?'rc-fadeinR delay_5':''">
           <img src="../assets/rc-info-img2.png" class="rc-chat-r " :class="infoObj.infoTop?'rc-fadeinR':''">

        </div>

      </div>
      <!--e: lovu-->

      <!--s: live chat-->
      <div class="all-info-warp" ref="chatTop">

        <div class="rc-info-warp">

          <div class="all-info-title">

            <span class="rc-icon rc-info-live" :class="infoObj.chatTop?'rc-rotatein':''"></span>
            <span class="rc-info-live-bg" :class="infoObj.chatTop?'rc-fadeinR delay_5':''"></span>

          </div>

          <p class="rc-info" :class="infoObj.chatTop?'rc-fadeinB delay_5':''">Livechat is a mobile video community application. Base on machine learning and deep learning Livechat allows its users to capture joyful moments in their video broadcast live on mobile devices at anytime and anywhere. Livechat, which implies sharing your happy moments has become a popular lifestyle for young generation.</p>

          <a href="javascript:" class="info-learn">Learn more</a>

        </div>

        <div class="rc-info-chat">

          <img src="../assets/rc-info-img3.png" class="rc-chat-l" :class="infoObj.chatTop?'rc-fadeinR delay_5':''">
          <img src="../assets/rc-info-img4.png" class="rc-chat-r " :class="infoObj.chatTop?'rc-fadeinR':''">

        </div>

      </div>
      <!--e: live chat-->

    </div>

  </section>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        infoObj:{
          infoTop:false,
          chatTop:false,
        }
      }
    },
    methods:{
      offsetTop () {
        let infoTop = this.$refs['infoTop'].getBoundingClientRect().top;
        let chatTop = this.$refs['chatTop'].getBoundingClientRect().top;
        let infoObj = {"infoTop":infoTop,"chatTop":chatTop}
        this.$emit('infoFun',infoObj)
      },
      parentInfoClick(obj){
        this.infoObj = obj
      }
    },
    mounted(){
      this.offsetTop()
    }
  }
</script>

<style scoped>

</style>
