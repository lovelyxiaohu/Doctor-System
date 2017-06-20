<template>
<q-layout style='width:100%;background:#eee;'>
     <div slot="header" class="toolbar" style='text-align: center;background: #fff;color:#000;'>
      <div style='float:left;position:absolute;left:10px;padding:0;font-size:16px;' @click='back()'>
           <i class="item-secondary">keyboard_arrow_left</i>返回
      </div>
      <q-toolbar-title :padding="1">
        设置
      </q-toolbar-title>
    </div>
    <div style='width:100%;'>
     <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">person</i>
            <div class="item-content">
                账户与安全
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
    <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">alarm</i>
            <div class="item-content">
                常用地址
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">email</i>
            <div class="item-content">
                紧急联系人
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">done_all</i>
            <div class="item-content">
                行程安全
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
     <div class="list" style='background:#fff;'>
        <div class="item">
            <i class="item-primary">reorder</i>
            <div class="item-content">
                实时路况
            </div>
            <q-toggle
            icon="alarm"
            v-model="checked"
            style="position:absolute;right:5px;top:5px;"
            ></q-toggle>
        </div>
        <div class="item">
            <i class="item-primary">hourglass_full</i>
            <div class="item-content">
                音效提醒
            </div>
            <q-toggle
            icon="done_all"
            class="orange"
            v-model="checked_music"
            style="position:absolute;right:5px;top:5px;"
            ></q-toggle>
        </div>
    </div>
    <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">check_box</i>
            <div class="item-content">
                用户指南
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">radio_button_checked</i>
            <div class="item-content">
                给快医好评
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
    <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <i class="item-primary">help</i>
            <div class="item-content">
                法律条款
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
        <div class="item item-link">
            <i class="item-primary">hourglass_empty</i>
            <div class="item-content">
                关于快医
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
     <div class="list" style='background:#fff;'>
        <div class="item item-link">
            <div class="item-content" style="text-align:center;color:orange;">
                退出登录
            </div>
        </div>
    </div>
    </div>
</q-layout>
</template>

<script>
    import router from '../../router';
    
    export default {
        data(){
            return{
                checked:true,
                checked_music:false
            }
        },
        methods:{
            back(){
                router.go(-1)
            }
        }
    }
</script>
   
<style scoped>
    .q-toggle div:before{
        top:0;
        height:24px;
    }
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