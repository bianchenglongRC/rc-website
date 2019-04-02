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

            <span class="rc-info-lovu rc-lovu-svg" :class="infoObj.infoTop?'rc-rotatein':''"></span>
            <div class="rc-info-lovu-bg" :class="infoObj.infoTop?'is-revealed rc-fadeinR delay_5':''">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 132 54" style="enable-background:new 0 0 132 54;">
                <g>
                  <defs>
                    <path id="SVGID_1_" d="M43.321,27.188c-4.225,0-6.946,3.498-6.946,9.018c0,5.502,2.703,8.982,6.946,8.982    c4.225,0,6.929-3.48,6.929-8.982C50.25,30.685,47.547,27.188,43.321,27.188z M43.312,19.125c9.778,0,15.938,6.56,15.938,17.074    c0,10.491-6.16,17.051-15.938,17.051c-9.801,0-15.938-6.56-15.938-17.051C27.375,25.685,33.512,19.125,43.312,19.125z"/>
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use xlink:href="#SVGID_1_" style="overflow:visible;"/>
                  </clipPath>
                  <rect x="22.375" y="14.125" style="clip-path:url(#SVGID_2_);fill:#7000E2;" width="41.875" height="44.125"/>
                </g>
                <g class="pant">
                  <defs>
                    <path id="SVGID_3_" d="M96,3.116l1.193-1.293c1.686-1.826,4.533-1.94,6.359-0.254c1.826,1.686,1.94,4.533,0.254,6.359l-4.5,4.875    c-1.782,1.93-4.831,1.93-6.613,0l-4.5-4.875c-1.686-1.826-1.572-4.673,0.254-6.359c1.826-1.686,4.673-1.572,6.359,0.254L96,3.116z    "/>
                  </defs>
                  <clipPath id="SVGID_4_">
                      <use xlink:href="#SVGID_3_" style="overflow:visible;"/>
                    </clipPath>
                    <rect  x="82" y="-4.625" style="clip-path:url(#SVGID_4_);fill:#FF448C;" width="28" height="23.875"/>
                  </g>
                <g>
               	<defs>
		              <path id="SVGID_5_" d="M0,23.675c0-2.485,2.015-4.5,4.5-4.5S9,21.19,9,23.675v12.537c0,4.434,3.621,8.037,8.1,8.037h4.05    c2.485,0,4.5,2.015,4.5,4.5s-2.015,4.5-4.5,4.5H17.1C7.661,53.25,0,45.627,0,36.213V23.675z"/>
	              </defs>
                  <clipPath id="SVGID_6_">
		             <use xlink:href="#SVGID_5_" style="overflow:visible;"/>
	               </clipPath>
                  <rect x="-5" y="14.175" style="clip-path:url(#SVGID_6_);fill:#7000E2;" width="35.65" height="44.075"/>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_7_" d="M97.8,23.675c0-2.485,2.015-4.5,4.5-4.5c2.485,0,4.5,2.015,4.5,4.5v12.537c0,4.434,3.621,8.037,8.1,8.037    s8.1-3.603,8.1-8.037V23.675c0-2.485,2.015-4.5,4.5-4.5c2.485,0,4.5,2.015,4.5,4.5v12.537c0,9.414-7.661,17.037-17.1,17.037    s-17.1-7.623-17.1-17.037V23.675z"/>
                  </defs>
                  <clipPath id="SVGID_8_">
                    <use xlink:href="#SVGID_7_" style="overflow:visible;"/>
                  </clipPath>
                  <rect x="92.8" y="14.175" style="clip-path:url(#SVGID_8_);fill:#7000E2;" width="44.2" height="44.075"/>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_9_" d="M77.775,38.728l8.579-17.073c1.116-2.221,3.821-3.116,6.041-2s3.116,3.821,2,6.041l-12.6,25.075    c-1.661,3.306-6.381,3.306-8.042,0l-12.6-25.075c-1.116-2.221-0.22-4.925,2-6.041c2.221-1.116,4.926-0.22,6.041,2L77.775,38.728z"/>
                  </defs>
                  <clipPath id="SVGID_10_">
                    <use xlink:href="#SVGID_9_" style="overflow:visible;"/>
                  </clipPath>
                  <rect x="55.674" y="14.174" style="clip-path:url(#SVGID_10_);fill:#7000E2;" width="44.202" height="44.076"/>
                </g>
                </svg>
            </div>

          </div>

          <p class="rc-info" :class="infoObj.infoTop?'rc-fadeinB delay_5':''">Powered by machine learning and deep learning algorithms, LovU is the largest AI dating platform in India and one of the most popular mobile platforms on the market. It provides users a unique, personalized and comprehensive way to find classic romance, enabling them to discover and explore themes of love and friendship.</p>

          <a href="http://www.lovuchat.com/" target="_blank" class="info-learn">Learn more</a>

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

            <span class="rc-info-live rc-livechat-svg" :class="infoObj.chatTop?'rc-rotatein':''"></span>
            <span class="rc-info-live-bg" :class="infoObj.chatTop?'rc-fadeinR delay_5':''"></span>

          </div>

          <p class="rc-info" :class="infoObj.chatTop?'rc-fadeinB delay_5':''">Livechat is a mobile video community application. Base on machine learning and deep learning Livechat allows its users to capture joyful moments in their video broadcast live on mobile devices at anytime and anywhere. Livechat, which implies sharing your happy moments has become a popular lifestyle for young generation.</p>

          <a href="http://www.livechatstar.com/" target="_blank" class="info-learn">Learn more</a>

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
