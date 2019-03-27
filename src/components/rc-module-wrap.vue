<template>
  <section class="layout all-bg main-warp" ref="moduleTop">

    <div class="layout-warp">

      <div class="warp-header">

        <h1 :class="moduleBol?'rc-fadeinB':''">The world lies in your eyes.</h1>
        <p class="warp-desc" :class="moduleBol?'rc-fadeinB delay_2':''">We can tell when things end, but we can’t tell when things start again.</p>
        <p class="warp-desc desc-right" :class="moduleBol?'rc-fadeinL delay_5':''">--Riley</p>

      </div>

    </div>

  </section>
</template>

<script>
  export default {
    name: "app",
    data () {
      return {
        moduleBol:false
      }
    },
    methods:{
      offsetTop () {
        let moduleTop = this.$refs['moduleTop'].getBoundingClientRect().top;
        this.$emit('moduleFun',moduleTop)
      },
      parentModuleClick(bol){
        this.moduleBol = bol
      }
    },
    mounted(){
      this.offsetTop()
    }
  }
</script>

<style scoped>

</style>
