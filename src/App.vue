<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" style='width:100%;'>
      <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}



</script>

<style>
  .fade{
    transition:all 1s;
  }
  .fade-enter,.fade-leave-active{
    transition:all 1s;
    position:absolute;
    left:-100%;
  }
  .fade-enter-avtive,.fade-leave{
    left:0%;
  }
  .layout-footer{
    width:90%;
    position:absolute;
    bottom:5px;
    left:50%;
    transform:translateX(-50%);
  }
  .q-fab.opened .backdrop {
    transform: translate3d(0px, 0px, 0px) !important;
  }
</style>
