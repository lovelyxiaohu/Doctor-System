import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  return () => System.import(`components/${component}.vue`)
}

function settlementload(compoent1,component2) {
  return () => System.import(`components/${compoent1}/${component2}.vue`)
}

export default new VueRouter({
  mode:"history",
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Index') ,children:[{ path: "baidu", component:load('Baidu') }]},
    { path: "/settlementhome", component:settlementload('settlement','SettlementHome') } ,
    {path:"/stroke", component:settlementload("titleBar","Stroke")},
    {path:'/wallet',component:settlementload("titleBar","Wallet")},
    {path:'/setting',component:settlementload("titleBar","Set")},
     { path: '/test', component: load('Test')},
  ]
})
