<template>
  <section class="layout">

    <div class="layout-warp">

      <div class="rc-main-history" ref="historyTop" :class="historyBol?'is-revealed':''">


        <!--s: title-->
        <h1 class="rc-main-head rc-all-title" :class="historyBol?'rc-fadeinR':''"><b>Development</b><p>History</p></h1>
        <!--e: title-->

        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">

          <g class="path-2">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M81.333,542.613H180"></path>
          </g>
          <g class="path-1">
            <circle fill="none" stroke="#702ade" class="rc-stroke" cx="83.813" cy="540.313" r="10.344"></circle>
          </g>
          <g class="path-4">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M193.1,544.61l-0.194-3.328,114.166-6.666"></path>
          </g>
          <g class="path-3"><circle class="rc-stroke" cx="183.156" cy="540.313" r="10.344"></circle></g>
          <g class="path-6">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M310.281,536.942l-0.229-3.325,120.833-8.333"></path>
          </g>
          <g class="path-5">
            <circle fill="none" stroke="#702ade" class="rc-stroke" cx="299.813" cy="534.313" r="10.344"></circle>
          </g>
          <g class="path-8">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M418.244,528.6l-0.488-3.3,146.667-21.666"></path>
          </g>
          <g class="path-7"><circle class="rc-stroke" cx="420.656" cy="526.14" r="10.344"></circle></g>
          <g class="path-10">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M565.329,506.81l-1.324-3.059,136.666-59.166"></path>
          </g>
          <g class="path-9"><circle class="rc-stroke" cx="562.968" cy="503.64" r="10.344"></circle></g>
          <g class="path-12">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M702.284,447.484l-1.9-2.738L842.05,346.415l1.9,0"></path>
          </g>
          <g class="path-11"><circle class="rc-stroke" cx="702.968" cy="443.64" r="10.344"></circle></g>
          <g class="path-14">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M844.094,349.041l-2.188-2.514,140.833-122.5,2.188,0"></path>
          </g>
          <g class="path-13"><circle class="rc-stroke" cx="843.968" cy="345.64" r="10.344"></circle></g>
          <g class="path-16">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M985.105,225.53l-2.543-2.154,69.168-81.665,2.54,0"></path>
          </g>
          <g class="path-15"><circle class="rc-stroke" cx="983.968" cy="222.64" r="10.344"></circle></g>
          <g class="path-18">
            <path fill="none" stroke="#702ade" stroke-width="3" stroke-miterlimit="10" d="M1054.32,144.634l-2.64-2.025,67.5-88.331,2.64,0"></path>
          </g>
          <g class="path-17"><circle class="rc-stroke" cx="1052.155" cy="142.813" r="10.345"></circle></g>
          <g class="path-19"><circle class="rc-stroke" cx="1116.315" cy="58.656" r="10.345"></circle></g>
        </svg>

        <section class="rc-main-pro">

          <!--s: 2014-->
          <div class="path-info rc-2014" :class="historyBol?'rc-fadeinB':''">Founded by Serial <br/>Entrepreneurs in our <br/>beloved Hong Kong.</div>
          <!--e: 2014-->

          <!--s: 2015-->
          <div class="path-info rc-2015 rc-fadeinT delay_in_1">Keep trying the right <br/>combination of technology <br/>and romance</div>
          <!--e: 2015-->

          <!--s: 2016-->
          <div class="path-info rc-2016" :class="historyBol?'rc-fadeinR delay_in_2':''">
            <div class="rc-place">
              <span class="rc-icon rc-icon-lovu"></span>
              <span class="rc-icon rc-icon-chat"></span>
            </div>
            <p>Hey, we were born!</p>
          </div>
          <!--e: 2016-->

          <!--s: 1H2017-->
          <div class="path-info rc-1H2017" :class="historyBol?'rc-fadeinT delay_in_3':''">
            <h1>#1 Million</h1>
            <p>registered users!</p>
          </div>
          <!--e: 1H2017-->

          <!--s: 2H2017-->
          <div class="path-info rc-2H2017" :class="historyBol?'rc-fadeinR delay_in_4':''">
            <span class="rc-icon rc-icon-cup"></span>
            <p class="rc-icon-title">Top 3 in</p>
            <div class="rc-icon-path">
              <span class="rc-flag rc-flag-icon-sa"></span>
              <span class="rc-flag rc-flag-icon-tr"></span>
            </div>
          </div>
          <!--e: 2H2017-->

          <!--s: 1Q2018-->
          <div class="path-info rc-1Q2018" :class="historyBol?'rc-fadeinL delay_in_5':''">
            <span class="rc-icon rc-icon-cup"></span>
            <p class="rc-icon-title">Top 3 in</p>
            <div class="rc-icon-path">
              <span class="rc-flag rc-flag-icon-es"></span>
              <span class="rc-flag rc-flag-icon-se"></span>
              <span class="rc-flag rc-flag-icon-be"></span>
              <span class="rc-flag rc-flag-icon-nl"></span>
            </div>
          </div>
          <!--e: 1Q2018-->

          <!--s: 2Q2018-->
          <div class="path-info rc-2Q2018" :class="historyBol?'rc-fadeinB delay_in_6':''">
            <span class="rc-icon rc-icon-cup"></span>
            <p class="rc-icon-title">Top 3 in</p>
            <div class="rc-icon-path">
              <span class="rc-flag rc-flag-icon-gb"></span>
              <span class="rc-flag rc-flag-icon-fr"></span>
              <span class="rc-flag rc-flag-icon-de"></span>
              <span class="rc-flag rc-flag-icon-it"></span>
            </div>
          </div>
          <!--e: 2Q2018-->

          <!--s: 3Q2018-->
          <div class="path-info rc-3Q2018" :class="historyBol?'rc-fadeinT delay_in_7':''">
            <span class="rc-icon rc-icon-cup"></span>
            <p class="rc-icon-title">Top 3 in</p>
            <div class="rc-icon-path">
              <span class="rc-flag rc-flag-icon-br"></span>
            </div>
          </div>
          <!--e: 3Q2018-->

          <!--s: 4Q2018-->
          <div class="path-info rc-4Q2018 " :class="historyBol?'rc-fadeinB delay_in_8':''">
            <span class="rc-icon rc-icon-cup"></span>
            <p class="rc-icon-title">#1 in</p>
            <div class="rc-icon-path">
              <span class="rc-flag rc-flag-icon-in"></span>
            </div>
          </div>
          <!--e: 4Q2018-->

          <!--s: 4Q2018-->
          <div class="path-info rc-millions" :class="historyBol?'rc-fadeinL delay_in_9':''">
            <h1>50 millions </h1>
            <p>Downloads</p>
          </div>
          <!--e: 4Q2018-->

          <div class="rc-main-cue" :class="historyBol?'rc-fadein delay_in_9':''">Sources come from APPAnnie best-selling app ranking list (2017-2019)</div>


          <div class="rc-main-time">

            <span :class="historyBol?'rc-rotatein':''">2014</span>
            <span class="rc-mar1" :class="historyBol?'rc-rotatein delay_in_1':''">2015</span>
            <span class="rc-mar2" :class="historyBol?'rc-rotatein delay_in_2':''">2016</span>
            <span class="rc-mar3" :class="historyBol?'rc-rotatein delay_in_3':''">1H2017</span>
            <span :class="historyBol?'rc-rotatein delay_in_4':''">2H2017</span>
            <span :class="historyBol?'rc-rotatein delay_in_5':''">1Q2018</span>
            <span :class="historyBol?'rc-rotatein delay_in_6':''">2Q2018</span>
            <span :class="historyBol?'rc-rotatein delay_in_7':''">3Q2018</span>
            <span :class="historyBol?'rc-rotatein delay_in_8':''">4Q2018</span>
          </div>

        </section>

      </div>

    </div>

  </section>
</template>

<script>
    export default {
        name: "app",
        data () {
          return {
            historyBol:false
          }
        },
        methods:{
          offsetTop () {
            let historyTop = this.$refs['historyTop'].getBoundingClientRect().top;
            this.$emit('historyFun',historyTop)
          },
          parentHistoryClick(bol){
            this.historyBol = bol
          }
        },
        mounted(){
          this.offsetTop()
        }
    }
</script>

<style scoped>

</style>
