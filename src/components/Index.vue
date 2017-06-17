<template>
  <q-layout style='width:100%;'>
    <!-- Header -->
    <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <button v-if="islogin" class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
    <button v-else class="hide-on-drawer-visible" v-for="dialog in form"
          @click="dialog.handler()">
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
    <div style='width:100%;'>
      <q-slider class="text-white" style='height:100%;border-bottom:1px solid #ccc;font-size:14px;'>
        <div slot="slide" class="bg-primary" style='background: #fff !important;padding:0;line-height:40px;color:#000;'>
          <q-tabs :refs="$refs" default-tab="tab-1" style='background: #fff !important;color:#000;'>
            <q-tab v-for='tab in tabs' :key='tab.name' :name="tab.name">
              {{tab.value}}
            </q-tab>
          </q-tabs>
          <div ref="tab-1" id='allmap' style='width:100%;height:100%;'></div>
          <div ref="tab-2">5125</div>
          <div ref="tab-3">62</div>
          <div ref="tab-4">7327</div>
          <div ref="tab-5">8484</div>
          <div ref="tab-6">8484</div>
        </div>
      </q-slider>
      <!-- Left-side Drawer -->
      <q-drawer ref="leftDrawer">
        <div class="toolbar" style="background: #fff;color:#000;">
          <q-toolbar-title style='height:100px;display:flex;align-items:center;'>
            <span class="chip label" style="width:100%;">
             
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
      <q-fab classNames="purple" icon="keyboard_arrow_up" direction="up" style='position:fixed;right:0;bottom:120px;width:100%;'
        @click='upcon'>
        <q-small-fab class="white" icon="mail"></q-small-fab>
        <q-small-fab class="white" icon="alarm"></q-small-fab>
        </q-fab>
    </div>
    <!-- Footer -->
    <div slot="footer" class="toolbar" style='background: #fff;color:#000;'>
      <div class="card" style='margin-bottom:0;'>
        <div class="card-content">
          <input v-model.lazy="msg" style='width:100%;' placeholder="出发地">
          <input v-model.lazy="msg1" style='width:100%;' placeholder="目的地">
        </div>
      </div>
    </div>
    <router-view></router-view>
  </q-layout>

</template>

<script>
  import { Dialog,Toast} from 'quasar'
  export default {
    data() {
      return {
        islogin:false,
        form: [
        {
          handler () {
            Dialog.create({
              title: '输入密码',
             
              form: {
                tel: {
                  type: 'textbox',
                  label: '',
                  model: '1567889953'
                },
                password: {
                 type: 'password',
                 label: '请输入密码',
                 model: ''
                },
                
              },
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            })
          }
        }
         ],
        item: {
          "a": "b"
        },
        msg:"",
        msg1:"",
        tabs: [{
          name: 'tab-1',
          value: "针灸"
        }, {
          name: 'tab-2',
          value: "推拿"
        }, {
          name: 'tab-3',
          value: "问诊"
        }, {
          name: 'tab-4',
          value: "巡查"
        }, {
          name: 'tab-5',
          value: "谢谢"
        }, {
          name: 'tab-6',
          value: "诊断"
        }]
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
      open() {
        console.log(1)
      },
      upcon() {
        document.getElementsByClassName('backdrop')[0].style.transform = 'translate3d(0px,0x, 0px)';
      }
    },
    mounted() {
      document.getElementsByClassName('purple')[0].style.position = 'absolute';
      document.getElementsByClassName('purple')[0].style.right = '0';
      function init(e) {
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      }
      setTimeout(() => {
        init()
      }, 500)

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
  .toolbar {
    padding: 0;
  }
  
  .layout-footer {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    background: #fff;
  }
  
  li {
    list-style: none;
    width: 100%;
  }
  
  .q-tab.active {
    color: #ea1235 !important;
  }
  
 
  .label.chip{
    height:60px;
    border-radius:50px;
  }
  .label.chip img, .label.chip div{
    height:60px;
    width:60px;
  }
  .item > .item-content{
    padding:7px 0;
  }
  .list{
    margin:10px 0;
  }
  .item{
    height:40px;
    margin:10px 0;
  }
  .item > i.item-primary{
    top:-10px;
    font-size:24px;
  } 
</style>