<template>
    <div id="myCollection">
        <div class="container">
            <div id="asideDiv">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#393D40"
                text-color="#FFFFFF"
                active-text-color="#00ACC1">
                    <el-menu-item index="1">
                        <i class="el-icon-view"></i>
                        <span slot="title">谁看过我</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-star-off"></i>
                        <span slot="title">我的收藏</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>个人信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">我的社保</el-menu-item>
                            <el-menu-item index="3-2">扶贫信息</el-menu-item>
                            <el-menu-item index="3-3">培训鉴定信息</el-menu-item>
                            <el-menu-item index="3-4">技能证书</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>账户设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">实名认证</el-menu-item>
                            <el-menu-item index="4-2">修改密码</el-menu-item>
                            <el-menu-item index="4-3">更换手机</el-menu-item>
                            <el-menu-item index="4-4">更换邮箱</el-menu-item>
                            <el-menu-item index="4-5">联系客服</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
            <div id="mainDiv">
                <p class="title">我的收藏</p>
                <div class="contentDiv">
                    <div class="topBar">
                        <div class="navBar">
                            <div style="width:42px; text-align:left">
                                <button :class="selectStyle1 ? selectClass : noSelectClass" @click="selectCondition='jobs'">职位</button>
                            </div>
                            <div style="width:56px; text-align:center">
                                <button :class="selectStyle2 ? selectClass : noSelectClass" @click="selectCondition='enterprises'">企业</button>
                            </div>
                            <div style="width:70px; text-align:right">
                                <button :class="selectStyle3 ? selectClass : noSelectClass" @click="selectCondition='trainVerify'">培训鉴定</button>
                            </div>
                        </div>
                        <div class="divSearch">
                            <el-input class="seekTool" v-model="searchInput" placeholder="请输入内容"></el-input>
                            <el-button @click="test">搜索</el-button>
                        </div>
                    </div>
                    <div v-if="selectCondition=='jobs'">
                        <collectedJobs/>
                    </div>
                    <div v-else-if="selectCondition=='enterprises'" class="enterprisesDiv">
                        <div class="division_long"></div>
                        <collectedEnterprises v-for="n in 11" :key="n"></collectedEnterprises>
                    </div>
                    <div v-else>
                        <collectedTrainVerify/>
                    </div>
                </div>
            </div>
            <div class="floatDiv">
                <ul>
                    <li><i class="iconfont icon-liuyan"></i></li>
                    <li @click="toTop"><i class="iconfont icon-fanhuidingbu"></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#myCollection{
    height: 100%;
    min-height: 820px;
    background:#f2f2f2;
    overflow-x: hidden;
    .container{
        position: relative;
        width: 1000px;
        margin: 20px auto;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        box-sizing: content-box;
        #asideDiv {
            width:200px;
            box-sizing: border-box;
            padding: 12px 0px;
            background: #393D40;
            .el-menu{
                box-sizing: content-box;
                border: none;
                width: 200px;
                padding-left: 0px;
                .el-menu-item{
                    box-sizing: content-box;
                    width: 160px;
                    text-align: left;
                }
                .el-submenu{
                    span{
                        margin-left:4px;
                    }
                    /deep/ .el-menu-item-group__title{
                        padding:0px;
                    }
                    /deep/ .el-submenu__title{
                        height:56px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .el-submenu__icon-arrow{
                            display: inline;
                        }
                    }
                    /deep/ .el-menu-item{
                        box-sizing: content-box;
                        min-width: 130px;
                        width:130px;
                        padding:0px 16px 0px 54px !important;
                        text-align: left;
                    }
                }
            }
        }
        #mainDiv {
            box-sizing: border-box;
            width: 776px;
            background-color: white;
            padding: 28px 24px 0px 24px;
            .title{
                height:18px;
                font-size:18px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                text-align: left;
                color:#737880;
                line-height:18px;
                margin-bottom: 26px;
            }
            .contentDiv{
                width:696px;
                box-sizing: border-box;
                margin: 0px auto;
                .topBar{
                    width:inherit;
                    height: 36px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    background-color:#FFFFFF;
                    margin-bottom: 12px;
                    .navBar{
                        display:flex;
                        align-items:center;
                        width:250px;
                        height:16px;
                    }
                    .divSearch{
                        display:flex;
                        justify-content:center;
                        .el-input{
                            width:250px;
                        }
                        .el-button{
                            height: 36px;
                            background: #00ACC1;
                            color: #FFF;
                            border-radius: 0;
                            outline: 0;
                            &:hover{
                                background: #26BFC6;
                            }
                            &:active{
                                background:rgb(34, 170, 177);
                            }
                        }
                    }
                }
            }
            .enterprisesDiv{
                display: flex;
                flex-wrap: wrap;
                .collectedEnterprises:nth-child(odd){
                    border-bottom-color: #E3E4E6;
                }
                .collectedEnterprises:nth-child(even){
                    border-bottom-color: #E3E4E6;
                    border-right-color: #E3E4E6;
                }
            }
        }
        .floatDiv{
            position: fixed;
            margin-left: 1025px;
            bottom: 10%;
            ul{
                margin: 0;
                padding: 0;
                background: #fff;
                border: 1px solid #E3E4E6;
            }
            li{
                padding: 0 5px;
                cursor: pointer;
                list-style-type: none;
                i{

                }
            }
        }
    }
}
.division_long{
  width:100%;
  height:1px;
  background-color:#00ACC1;
}
.textButtonBig{
  font-family: PingFangSC-Regular;
  font-weight: 400;
  width: max-content;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  padding: 0px;
  background-color: #ffffff;
  color:#00ACC1;
  border: none;
  outline: none;
  cursor: pointer;
}
.textButtonSmall{
  font-family: PingFangSC-Regular;
  font-weight: 400;
  width: max-content;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  padding: 0px;
  background-color: #ffffff;
  color:#737880;
  border: none;
  outline: none;
  cursor: pointer;
}
.textButtonSmall:hover{
  color:#00ACC1;
}
.textButtonSmall:active{
  color:rgb(18, 138, 145);
}
.seekTool{
    /deep/ .el-input__inner{
        border-radius: 0;
        height:36px;
    }
    /deep/ .el-input-group__append{
        border-radius: 0;
        background: #00ACC1;
        color:#FFF;
    }
}
</style>

<script>
import collectedJobs from '../components/comps-collectedJobs.vue'
import collectedEnterprises from '../components/comps-collectedEnterprises.vue'
import collectedTrainVerify from '../components/comps-collectedTrainVerify.vue'

export default {
  name: 'myCollection',
  components: { collectedJobs, collectedEnterprises, collectedTrainVerify },
  data () {
    return {
      searchInput: '',
      selectCondition: 'jobs',
      selectClass: 'textButtonBig',
      noSelectClass: 'textButtonSmall'
    }
  },
  methods: {
    test: function () {
      alert('test')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toTop () {
      (function smoothscroll () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll)
            window.scrollTo(0, currentScroll - (currentScroll / 5))
        }
      })()
    }
  },
  computed: {
    selectStyle1: function () {
        return (this.selectCondition == 'jobs')//eslint-disable-line
    },
    selectStyle2: function () {
        return (this.selectCondition == 'enterprises')//eslint-disable-line
    },
    selectStyle3: function () {
        return (this.selectCondition == 'trainVerify')//eslint-disable-line
    }
  }
}
</script>
