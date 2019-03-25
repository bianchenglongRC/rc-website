<template>
  <section class="modular-wrap">

    <div class="layout">

      <h1 class="all-title" ref="modularTitle" :class="modularObj.title==true?'rc-fadeinB':''">Fusing modern technology with classic romance <br/>for everyone worldwide</h1>

      <div class="all-list-layer">

        <ul>
          <li ref="li-T" :class="modularObj.liT==true?'rc-fadeinB':''">
            <img src="../assets/all_list_1.jpg">
            <div class="mask">
              <p class="all-list-title">50 Millions+ Users</p>
              <p class="all-list-desc">We have dedicated to <br/>providing our 50 millions+ users<br/> with love and laugh with our<br/> technology driven platforms since 2014.</p>
            </div>
          </li>
          <li :class="modularObj.liT==true?'rc-fadeinB':''">
            <img src="../assets/all_list_2.jpg">
            <div class="mask">
              <p class="all-list-title">Diversity and Globalization</p>
              <p class="all-list-desc">We believe in diversity<br/> and globalization which leads<br/> us to launch the online community<br/> platforms to shortly gain leading<br/> position in the international market.</p>
            </div>
          </li>
          <li ref="li-B" :class="modularObj.liB==true?'rc-fadeinB':''">
            <img src="../assets/all_list_3.jpg">
            <div class="mask">
              <p class="all-list-title">Machine Learning and AI Technology</p>
              <p class="all-list-desc">Thanks to our engineers' <br/>hard work on cutting-edge machine <br/>learning and AI technology, <br/>we are able to provide sustainable<br/> phenomenal user experience.</p>
            </div>
          </li>
          <li :class="modularObj.liB==true?'rc-fadeinB':''">
            <img src="../assets/all_list_4.jpg">
            <div class="mask">
              <p class="all-list-title">Well-being and Safety</p>
              <p class="all-list-desc">We value your well-being and<br/> safety more than everything,<br/> that is why we invested heavily and<br/> work closely with leading partners<br/> to maximize our user safety.</p>
            </div>
          </li>
        </ul>

      </div>

    </div>

  </section>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
       modularObj:{
         title:false,
         liT:false,
         liB:false,
       }
      }
    },
    methods:{
      offsetTop () {
        let modularTitle = this.$refs['modularTitle'].getBoundingClientRect().top;
        let liT = this.$refs['li-T'].getBoundingClientRect().top;
        let liB = this.$refs['li-B'].getBoundingClientRect().top;
        let modularObj = {"title":modularTitle,"liT":liT,"liB":liB}
        this.$emit('modularFun',modularObj)
      },
      parentModularClick(obj){
        this.modularObj = obj
      }
    },
    mounted(){
      this.offsetTop()
    }
  }
</script>

<style scoped>

</style>
