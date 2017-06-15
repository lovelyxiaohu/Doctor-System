<template>
<q-layout style='width:100%;'>
    <!-- Header -->
    <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
      <q-toolbar-title :padding="1">
        结算
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
    <div style='width:100%;'>    
      <div id='allmap' style='width:100%;height:100%;'></div>
      <!-- Left-side Drawer -->
      <q-drawer ref="leftDrawer">
        <div class="toolbar" style="background: #fff;color:#000;">
          <q-toolbar-title style='height:100px;display:flex;align-items:center;'>
            <span class="chip label" style="width:100%;">
              <img src="../../assets/header.jpg">
              John
            </span>
          </q-toolbar-title>
        </div>
        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="home" :to="{path: '/stroke', exact: true}">
            我的行程
          </q-drawer-link>
          <q-drawer-link icon="accessibility" :to="{path: '/wallet', exact: true}">
            我的钱包
          </q-drawer-link>
           <q-drawer-link icon="reorder" :to="{path: '/setting', exact: true}">
            设置
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
    
    </div>
    <!-- Footer -->
   
    <div slot="footer" style='background: #fff;color:#000;'>
    <div class="layout-padding"  v-if='show' :key='scoredisplay'>
   
      <div style='text-align:center;position:relative'>
      <span style='position:absolute;left:0;' @click='showsettlehome'>× </span>
      <span style='text-align:center'>评价</span>
       
      </div>

      <div style="font-size: 2rem; margin-top: 20px;text-align:center;">
        <q-rating v-model="ratingModel" :max="5"></q-rating>
       <span><em>{{ratingModel}}</em></span>
      </div>
<div style='height:30px;line-height:30px;'>
      <span style='position:absolute;left:20px;'>Readonly1</span><span style='position:absolute;right:20px;'>Readonly2</span>
</div>
    </div>

    <!--显示金额-->
      <div class="card" style='margin-bottom:0;' v-else='!show' :key='homedisplay'>
        <div class="item two-lines">
          <img class="item-primary" src="../../assets/settlement/katong.jpg">
          <div class="item-content">
            <div>Joe</div>
            <div>Web Developer</div>      
          </div>
        </div>
        <div class="card-content">
        <hr style='width:100%'/>
          <small>需要帮助</small>
          <hr style='width:100%'/>
        <dl style='padding:10px;'><dt>
          共<b style='font-size:24px;color:#000;'>100</b>元</dt><dd><small>费用疑问&gt;</small></dd></dl>
          
          <hr style='width:100%'/>
          <small @click='givescore' >评价本次服务&gt;</small>
        </div>
        
      </div>
    </div>
 
  </q-layout>
    
</template>

<script>
export default {
   data() {
      return {
        homedisplay:1,
        scoredisplay:0,
        ratingModel: 5,
        show:false
      }
   },

    computed: {

    },
    created() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=ao85ajwvtxiqSTvaMUh68YhXCY90u6uj&callback=init";
      document.head.appendChild(script);
    },
    methods: {
     showsettlehome(){
      this.homedisplay=1;
      this.scoredisplay=0;
      this.show = false;
     },
      givescore() {
        this.homedisplay=0;
        this.scoredisplay=1;
        this.show = true;
      }
    },
    mounted() {

      function init(e) {
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      }
      setTimeout(() => {
        init()
      }, 1000)

    },
    beforeDestroy() {
    
    }
  }

</script>

<style scoped>
.item{
    height:40px;
    margin:10px 0;
}
.item > i.item-primary{
    top:-10px;
    font-size:24px;
}
.layout-footer{
   
}
.card-content{
    padding: 13px 0px;
    text-align: center;
    font-size:12px;
    color:rgba(0,0,0,0.54);
}
.hidedisplay{
  display:none;
}
.showdisplay{
  display:none;
}
.label.chip{
  height:60px;
  border-radius:50px;
}
.label.chip img, .label.chip div{
  height:60px;
  width:60px;
}

</style>