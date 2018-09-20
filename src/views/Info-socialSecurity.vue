<template>
    <div id="socialSecurityInfo">
        <div class="container">
            <div id="asideDiv">
                <el-menu
                default-active="3-1"
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
                <div id="titleBar">
                    <span>个人信息</span>
                    <span class="divide">/</span>
                    <span>我的社保</span>
                </div>
                <div id="infoBar">
                    <el-date-picker
                        v-model="dateValue"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        format="yyyy/MM"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                    <div class="infoDiv">
                        <div>
                            <span>姓名</span>
                            <span>{{ userName }}</span>
                        </div>
                        <div>
                            <span>参保地</span>
                            <span>{{ ssAddr }}</span>
                        </div>
                        <div>
                            <span>参保号</span>
                            <span>{{ ssID }}</span>
                        </div>
                    </div>
                </div>
                <div id="tableDiv">
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="日期"
                            width="79"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="tradingOrg"
                            label="购买单位"
                            width="128"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="pension"
                            label="养老"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="medicare"
                            label="医疗"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="maternity"
                            label="生育"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="occupationalInjury"
                            label="工伤"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="urban_rural"
                            label="城乡"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="farmersToCitizens"
                            label="农转居"
                            width="75"
                            align="left"
                            header-align="left">
                        </el-table-column>
                        <el-table-column
                            prop="total"
                            label="合计"
                            width="72"
                            align="left"
                            header-align="left">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.el-table th{
    background: #f2f2f2;
}
.el-table .cell{
    font-size: 12px;
}
</style>

<style lang="scss" scoped>
#socialSecurityInfo {
    height: 100%;
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
                        padding:0px 20px 0px 50px !important;
                        text-align: left;
                    }
                }
            }
        }
        #mainDiv {
            box-sizing: border-box;
            width: 780px;
            height: 780px;
            background-color: white;
            padding: 28px 24px;
            #titleBar{
                box-sizing: content-box;
                width: 100%;
                text-align: left;
                margin-bottom: 26px;
                span{
                    height:18px;
                    font-size:18px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:#737880;
                    line-height:18px;
                }
                .divide{
                    margin:0px 8px;
                }
            }
            #infoBar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
                /deep/ .el-input__inner{
                    width:250px;
                }
                .infoDiv{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 400px;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    span:nth-child(odd){
                        color:#393D40;
                        margin-right:8px;
                    }
                    span:nth-child(even){
                        color:#737880;
                    }
                }
            }
            #tableDiv{
                width:100%;
            }
        }
    }
}
</style>

<script>
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      dateValue: '',
      userName: '张三',
      ssAddr: '保定市',
      ssID: '1233211234',
      tableData: [{
        date: '2018/06',
        tradingOrg: '阿斯利康到家了',
        pension: '￥254.80',
        medicare: '￥742.32',
        maternity: '￥123.72',
        occupationalInjury: '￥542.37',
        urban_rural: '￥659.68',
        farmersToCitizens: '￥813.42',
        total: '￥906.71'
      }, {
        date: '2018/07',
        tradingOrg: '阿斯利康到家了',
        pension: '￥254.80',
        medicare: '￥742.32',
        maternity: '￥123.72',
        occupationalInjury: '￥542.37',
        urban_rural: '￥659.68',
        farmersToCitizens: '￥813.42',
        total: '￥906.71'
      }, {
        date: '2018/08',
        tradingOrg: '阿斯利康到家了',
        pension: '￥254.80',
        medicare: '￥742.32',
        maternity: '￥123.72',
        occupationalInjury: '￥542.37',
        urban_rural: '￥659.68',
        farmersToCitizens: '￥813.42',
        total: '￥906.71'
      }, {
        date: '2018/09',
        tradingOrg: '阿斯利康到家了',
        pension: '￥254.80',
        medicare: '￥742.32',
        maternity: '￥123.72',
        occupationalInjury: '￥542.37',
        urban_rural: '￥659.68',
        farmersToCitizens: '￥813.42',
        total: '￥906.71'
      }, {
        date: '2018/10',
        tradingOrg: '阿斯利康到家了',
        pension: '￥254.80',
        medicare: '￥742.32',
        maternity: '￥123.72',
        occupationalInjury: '￥542.37',
        urban_rural: '￥659.68',
        farmersToCitizens: '￥813.42',
        total: '￥906.71'
      }]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
