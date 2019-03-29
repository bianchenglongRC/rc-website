<template>

  <section class="layout" ref="layoutTop" :class="matchViewObj.layoutTop?'is-revealed':''">

    <div class="layout-warp">

      <h1 class="all-title" :class="matchViewObj.layoutTop?'rc-fadeinB':''">Our Core Departments work together to pay 100% attention to your digital well-being.</h1>

      <div class="rc-matching">

        <div class="rc-motion-out sec3"></div>
        <div class="rc-motion-cen sec6">
          <i class="motion-1"></i>
          <i class="motion-2"></i>
          <i class="motion-3"></i>
        </div>
        <div class="rc-motion-fan sec9"></div>
        <div class="rc-motion-head"></div>

        <div class="rc-motion-1">

          <div class="infinite pulse">
            <i class="pulse-aim"></i>
          </div>

          <div class="motion-title" :class="matchViewObj.layoutTop?'rc-fadeinL':''">
            <p>User Acquisition</p>
            <p>Department</p>
          </div>

        </div>

        <div class="rc-motion-2">

          <i class="rc-motion-aim pulse"></i>

          <div class="motion-title" :class="matchViewObj.layoutTop?'rc-fadeinR':''">
            <p>Technology</p>
            <p>Department</p>
          </div>

        </div>

        <div class="rc-motion-3">

          <i class="rc-motion-aim pulse"></i>

          <div class="motion-title" :class="matchViewObj.layoutTop?'rc-fadeinB':''">
            <p>Legal and Compliance</p>
            <p>Department</p>
          </div>

        </div>

      </div>

      <h1 class="all-title" ref="layoutTitle" :class="matchViewObj.layoutTitle?'rc-fadeinB':''">User Digital Wellbeing Centre (UDWC)</h1>

      <div class="rc-index-bar" ref="layoutBar">

        <ul class="bar-list">
          <li class="bar-r" :class="matchViewObj.layoutBar?'rc-fadeinB':''">

            <span class="bar-img rc-match-icon bar-sin">

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4" y1="92" x2="55" y2="92"></line>
              </svg>

            </span>

            <span class="bar-title">Legal <br/>Procedure</span>

          </li>
          <li class="bar-r" :class="matchViewObj.layoutBar?'rc-fadeinB delay_2':''">

           <span class="bar-img rc-match-icon bar-roc">

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <line fill="none" stroke="#7100E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="10" y1="67.6" x2="15" y2="63"></line>
                <line fill="none" stroke="#7100E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="18" y1="76.2" x2="23" y2="71.5"></line>
                <line fill="none" stroke="#7100E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27" y1="85" x2="31.5" y2="80.5"></line>
              </svg>

            </span>

            <span class="bar-title">Cutting-edge<br/>Technology</span>

          </li>
          <li class="bar-r" :class="matchViewObj.layoutBar?'rc-fadeinB delay_3':''">

           <span class="bar-img rc-match-icon bar-book">

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" x1="35" y1="28" x2="70" y2="28"></line>
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" x1="35" y1="42" x2="70" y2="42"></line>
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" x1="35" y1="55" x2="55" y2="55"></line>
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" x1="35" y1="68" x2="55" y2="68"></line>
              </svg>

            </span>

            <span class="bar-title">User reporting<br/>Schemes</span>

          </li>
          <li :class="matchViewObj.layoutBar?'rc-fadeinB delay_4':''">

            <span class="bar-img rc-match-icon bar-rec">

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29" y1="75" x2="29" y2="40"></line>
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49" y1="75" x2="49" y2="40"></line>
                <line fill="none" stroke="#7100E6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="69" y1="75" x2="69" y2="40"></line>
              </svg>

            </span>

            <span class="bar-title">Charity and <br/>Professional<br/> organization </span>

          </li>
        </ul>

        <span class="bar-footer">We bring together industry best-practice to deliver sustainable improvement.</span>

      </div>

    </div>

  </section>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        matchViewObj:{
          layoutTop:false,
          layoutTitle:false,
          layoutBar:false,
        }
      }
    },
    methods:{
      offsetTop () {
        let layoutTop = this.$refs['layoutTop'].getBoundingClientRect().top;
        let layoutTitle = this.$refs['layoutTitle'].getBoundingClientRect().top;
        let layoutBar = this.$refs['layoutBar'].getBoundingClientRect().top;
        let matchViewObj = {"layoutTop":layoutTop,"layoutTitle":layoutTitle,"layoutBar":layoutBar}
        this.$emit('matchViewFun',matchViewObj)
      },
      parentMatchingClick(obj){
        this.matchViewObj = obj
      }
    },
    mounted(){
      this.offsetTop()
    }
  }
</script>

<style scoped>

</style>
