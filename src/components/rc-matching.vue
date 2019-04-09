<template>

  <section class="layout all-bg" style="float:left;height:580px;margin-top:30px;">

    <div id="WebGlMain"></div>

    <div class="layout-time">

      <p class="layout-time-num">{{numString}}+</p>
      <p class="layout-time-title">Matching Times</p>
      <span class="layout-time-info">Well, We believe in both Algorithm and Love at the first sight</span>

    </div>

  </section>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        layoutTimer:null,
        layoutNum:localStorage.getItem('num') == null || localStorage.getItem('num') == ''?'19535430000':localStorage.getItem('num'),
        numString:''
      }
    },
    methods:{

      layoutTime(){

        this.layoutNum=parseInt(this.layoutNum)+this.randomNum(400,1000)
        this.numString = this.toThousands(this.layoutNum)
        localStorage.setItem('num',this.layoutNum)
      },
      toThousands(num) {

        let result = [ ], counter = 0;
        num = (num || 0).toString().split('');
        for (let i = num.length - 1; i >= 0; i--) {
          counter++;
          result.unshift(num[i]);
          if (!(counter % 3) && i != 0) { result.unshift(','); }
        }
        return result.join('');
      },
      randomNum(minNum,maxNum){

          switch(arguments.length){
            case 1:
              return parseInt(Math.random()*minNum+1,10);
              break;
            case 2:
              return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
              break;
            default:
              return 0;
              break;
          }

      }

    },
    mounted(){
      this.numString = this.toThousands(this.layoutNum)
      this.layoutTimer=setInterval(this.layoutTime,2000)
    },
  }
</script>

<style scoped>

</style>
