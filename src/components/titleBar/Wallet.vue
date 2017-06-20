<template>
<q-layout style='width:100%;background:#eee;'>
     <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <div style='float:left;position:absolute;left:10px;padding:0;font-size:16px;' @click='back()'>
           <i class="item-secondary">keyboard_arrow_left</i>返回
      </div>
      <q-toolbar-title :padding="1">
        我的钱包
      </q-toolbar-title>
    </div>
    <div style='width:100%;'>
     <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">person</i>
            <div class="item-content">
                支付方式
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
    <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">alarm</i>
            <div class="item-content">
                余额
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">email</i>
            <div class="item-content">
                医币
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">done_all</i>
            <div class="item-content">
                出行卡
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">format_color_fill</i>
            <div class="item-content">
                代金券
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
     <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">reorder</i>
            <div class="item-content">
                保险
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">hourglass_full</i>
            <div class="item-content">
                发票与报销
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
    </div>
</q-layout>
</template>

<script>
    import router from '../../router';
    
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
    .item > .item-content{
        padding:7px 0;
    }
    .list{
        margin:10px 0;
    }
    .item{
        height:30px;
        margin:5px 0;
    }
    .item > .item-secondary{
        margin:4px;
    }
    .item > i.item-primary{
        top:-10px;
        font-size:20px;
    }
    .item > .item-primary ~ .item-content{
        margin-left:40px;
    }
</style>