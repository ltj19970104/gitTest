<template>
    <el-menu default-active="1" class="el-menu-vertical-demo enpNavMenu" 
        :collapse="false" :unique-opened="true" :router="true" :collapse-transition="true" :default-openeds="['1','2']"
        background-color="#393D40" text-color="#FFFFFF" active-text-color="#00acc1"
        @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>招聘中心</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">数据看板</el-menu-item>
                <el-menu-item index="1-2">职位管理</el-menu-item>
                <el-menu-item index="1-3">人才库</el-menu-item>
                <el-menu-item index="1-4">招聘会</el-menu-item>
                <el-menu-item index="1-5">我的收藏</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>帐户设置</span>
            </template>
            <el-menu-item index="2-1">实名认证</el-menu-item>
            <el-menu-item index="2-2">企业信息</el-menu-item>
            <el-menu-item index="2-3">企业资源</el-menu-item>
            <el-menu-item index="2-4">修改密码</el-menu-item>
            <el-menu-item index="2-5">更换手机</el-menu-item>
            <el-menu-item index="2-6">更换邮箱</el-menu-item>
            <el-menu-item index="/consultJobs">联系客服</el-menu-item>
        </el-submenu>

    </el-menu>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleOpen(key,keyPath){
            console.log(key,keyPath);
        },
        handleClose(key,keyPath){
            console.log(key,keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
.enpNavMenu{
    /deep/ .el-submenu__icon-arrow{
        display:block;
    }
}
</style>
