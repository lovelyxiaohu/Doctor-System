<template>
<q-layout style='width:100%;background:#eee;'>
     <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <div style='float:left;position:absolute;left:10px;padding:0;font-size:16px;' @click='back()'>
            <i class="item-secondary">keyboard_arrow_left</i>返回
      </div>
      <q-toolbar-title :padding="1">
        我的行程
      </q-toolbar-title>
    </div>
    <div style='width:100%;'>
        <div class="card">
            <div class="card-title text-black">
                针灸
            </div>
            <div class="card-content card-force-top-padding">
                <div>时间:上周一12:52</div>
                <div>出发地：镇海区</div>
                <div>目的地：江东区</div>
            </div>
        </div>
        <div class="card">
            <div class="card-title text-black">
                针灸
            </div>
            <div class="card-content card-force-top-padding">
                <div>时间:上周一12:52</div>
                <div>出发地：镇海区</div>
                <div>目的地：江东区</div>
            </div>
        </div>
    </div>
</q-layout>
</template>

<script>
    import router from '../../router'
    export default {
        methods:{
            back(){
                router.go(-1)
            }
        }
    }
</script>
   
<style scoped>
    .card{
        margin:10px 0;
        background:#fff;
    }
    .layout-content{
        justify-content:center;
    }
</style>