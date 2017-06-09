<template>
  <router-view></router-view>
</template>

<script>
  
  export default {
    data() {
      return {
      
      }
    },
    computed: {
      position() {
      
      }
    },
    methods: {
     
    },
    mounted() {
      
    },
    beforeDestroy() {
      if (this.orienting) {
        window.removeEventListener('deviceorientation', this.orient, false)
      }
      else if (this.rotating) {
        window.removeEventListener('devicemove', this.rotate, false)
      }
      else {
        document.removeEventListener('mousemove', this.move)
      }
    }
  }

</script>

<style lang="stylus">
  .logo-container {
    width 192px;
    height 268px;
    perspective 800px;
    position absolute;
    top 50%;
    left 50%;
    transform translateX(-50%) translateY(-50%);
  }
  
  .logo {
    position absolute;
    transform-style preserve-3d;
  }
</style>