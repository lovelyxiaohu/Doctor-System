<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
      <q-toolbar-title :padding="1">
        宁波市
      </q-toolbar-title>
      <button class="hide-on-drawer-visible">
        <i>more_vert</i>
        <q-popover ref="popover">
        <div class="list item-delimiter highlight">
          <div
            class="item item-link"
          >
            <div class="list">
              <div class="item" v-for="n in 2">
                <div class="item-content">
                  List Item
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-popover>
      </button>
    </div>
    <!-- Navigation Tabs -->
    <q-slider class="text-white">
      <div slot="slide" class="bg-primary">
        Slide 1
      </div>
      <div slot="slide" class="bg-secondary">
        Slide 2
      </div>
      <div slot="slide" class="bg-tertiary">
        Slide 3
      </div>
    </q-slider>
    <!-- Left-side Drawer -->
    <q-drawer ref="leftDrawer">
      <div class="toolbar" style="background: #fff;color:#000;">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>
      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Link
        </q-drawer-link>
      </div>

    </q-drawer>

    <!-- IF USING subRoutes only: -->
    <router-view class="layout-view"></router-view>
    <!-- OR ELSE, IF NOT USING subRoutes: -->
    <div class="layout-view"></div>
    <!-- Right-side Drawer -->
    <q-drawer ref="rightDrawer" right-side>
      ...
    </q-drawer>
    <q-fab classNames="purple" icon="keyboard_arrow_up" direction="up" style='position:fixed;right:0;bottom:60px;width:100%;'>
      <q-small-fab class="white" icon="mail"></q-small-fab>
      <q-small-fab class="white" icon="alarm"></q-small-fab>
    </q-fab>
    <!-- Footer -->
    <div slot="footer" class="toolbar">
      ....
    </div>
    <router-view></router-view>
  </q-layout>

</template>

<script>
  export default {
    data() {
      return {
        item: {
          "a": "b"
        }
      }
    },
    computed: {
      position() {

      }
    },
    methods: {
      open() {
        console.log(1)
      }
    },
    mounted() {
      document.getElementsByClassName('purple')[0].style.position = 'absolute';
      document.getElementsByClassName('purple')[0].style.right = '0';
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

<style lang="stylus" scoped>
  li {
    list-style: none;
    width: 100%;
  }
</style>