<template>
    <div class="recruitInfo">
        <recruitInfoHead ></recruitInfoHead>

        <div class="cr-box box-bg-F7">
            <div class="cr-cont">
                <div class="cr-cont-left">
                    <section class="section-top">
                        <span class="f12">最后更新 2018/01/24</span>
                        <div class="contactHR">
                            <el-button class="contactBtn " size="medium">咨询</el-button>
                            <el-button class="contactBtn color-00ACC1" size="medium">投简历</el-button>
                            <br/>
                            <a class="linkBtn" href="#">收藏 <i class="el-icon-star-off"></i></a>
                        </div>

                        <div class="hrLine">
                            <img class="headImg" :src="headImg" alt="">
                            <span class="hrName">李四</span>
                            <span class="hrStatus">经理<i class="vline"></i>刚刚在线</span>
                        </div>

                        
                    </section>
                    <section>
                        <h5>职位描述</h5>
                        <p>
                            1、与视觉设计师协作，完成web页面制作及交互；<br/>
                            2、使用HTML5等前端技术进行移动端WebAPP开发；<br/>
                            3、负责高性能可复用前端模块设计，建立前端规范和流程；<br/>
                            4、积极研究前沿前端技术，并将研究成果应用于项目中；<br/>
                            5、以用户为中心，提升应用易用性，增加用户体验。<br/>
                            <br/>
                            任职要求：<br/>
                            1、熟练掌握Html,css,Javascript，有移动web开发经验优先考虑；<br/>
                            2、精通css,js对各浏览器兼容，熟悉浏览器性能优化；<br/>
                            3、熟练使用主流的JavaScript库或框架（Zepto,RequestJs,angularjs等）；<br/>
                            4、有较强的逻辑能力和算法能力，有良好的编码规范；<br/>
                            5、良好的学习能力和沟通能力，追求完美；有工作激情、乐于分享、能在较大强度下工作<br/>
                        </p>
                    </section>
                    <section>
                        <h5>公司简介</h5>
                        <p>
                            品间百的文我买小做小情求妈希白身类因有过龙文作。民把话中安造学情们怕化罗，道力从少价除事信裡自亲常向是老馆前意国级方主度三进模影好能当论特着的场分个，们强我皮脚年时青想价会无操史心是人看是甚千价电老作空，办细国去果一施学活北！
                        </p>
                        <a class="btnMore">更多<i class="el-icon-arrow-down"></i></a>
                    </section>
                    <section>
                        <h5>工商信息</h5>
                        <p>
                            法人代表：<span class="hightFont">张三</span>
                            <i class="vline"></i>
                            注册资本：<span class="hightFont">1000万人民币</span>
                            <i class="vline"></i>
                            成立时间：<span class="hightFont">2017/12/21</span>
                        </p>
                        <a class="btnMore">更多<i class="el-icon-arrow-down"></i></a>
                    </section>
                    <section class="section-last">
                        <h5>公司地址</h5>
                        <div class="mapBox">
                            <img width="100%" src="../../assets/images/jobsmap.png" />
                        </div>

                        <ul class="cAddr">
                            <li class="addrItem active">
                                <span class="addrTit"><i class="el-icon-location"></i>云浮市</span>
                                <p >趣本非什这民阿问个香深是过中关相满否验文的大考医目态</p>
                            </li>
                            <li class="addrItem">
                                <span class="addrTit"><i class="el-icon-location"></i>云浮市</span>
                                <p >趣本非什这民阿问个香深是过中关相满否验文的大考医目态</p>
                            </li>
                            <li class="addrItem">
                                <span class="addrTit"><i class="el-icon-location"></i>云浮市</span>
                                <p >趣本非什这民阿问个香深是过中关相满否验文的大考医目态</p>
                            </li>
                        </ul>
                    </section>
                </div>

                <div class="cr-cont-right">
                    <companyEnv class="float-r" />

                    <detailList class="float-r" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import recruitInfoHead from '../comps/comp-recruitInfoHead'
import companyEnv from "./jobs-companyEnv";
import detailList from "./jobs-detailList";

export default {
    name:'recruitInfo',
    components:{ recruitInfoHead,companyEnv,detailList },
    data(){
        return{
           headImg:require('../../assets/images/jobsavatar.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
.recruitInfo{
    .cr-box {
    background: #e3e4e6;
    width: 100%;
    .cr-cont {
      width: (1000rem/16);
      height:100%;
      margin: 0 auto;
      padding: (40rem/16) 0 (20rem/16);
      .cr-head {
        font-size: 1rem;
        line-height: 1rem;
        margin-bottom: (20rem/16);
        .linkBtn {
          float: right;
          color: #737880;
          font-size: (14rem/16);
          text-decoration: none;
        }
      }
      .cr-head-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
      .cr-cont-left {
        float: left;
        width: (780rem/16);
        padding: (40rem/16);
        background: #fff;
        section {
          border-bottom: (1rem/16) solid #e3e4e6;
          padding-bottom: (40rem/16);
          margin-top: (40rem/16);
          display: inline-block;
          width: 100%;
          &.section-top{
              margin-top:0;
              border-color:#00ACC1;
          }
          &.section-last{
              border-color:transparent;
          }
        }
        h5 {
          font-size: 1rem;
          color: #393d40;
        }
        p {
          font-size: (14rem/16);
          color: #737880;
          line-height: (23rem/16);
          margin-top: (24rem/16);
          margin-bottom: (10rem/16);
          &.txtCenter{
            text-align: center;
          }       
          .vline {
            margin: 0 (40rem/16);
          }          
        }
        .contactHR{
            text-align: right;
        }
        .hrLine{
            position: relative;
            margin-top:(-20rem/16);
            width:70%;
            .headImg{
                height: (48rem/16);
                width: (48rem/16);
            }
            .hrName{
                position: absolute;
                margin-left:(15rem/16);
                color:#393D40;
                font-size:1rem;                
            }
            .hrStatus{
                position: absolute;
                margin-left:(15rem/16);
                margin-top:(25rem/16);
                font-size:(14rem/16);
                color: #909399;
                .vline{
                    width:(1rem/16);
                    height:(10rem/16);
                    display: inline-block;
                    margin:0 (10rem/16);
                    background-color:#E3E4E6;
                }
            }
        }
        .btnMore {
          font-size: (14rem/16);
          color: #737880;
          float: right;
          cursor: pointer;
        }
        .mapBox {
          width: (480rem/16);
          height: (250rem/16);
          float: left;
          margin-right: (20rem/16);
          margin-top: (24rem/16);
        }
        .cAddr {
          margin-top: (24rem/16);
          height: (250rem/16);
          overflow: hidden;
          .addrItem {
            padding-bottom: (12rem/16);
            margin-bottom: (12rem/16);
            border-bottom: (1rem/16) dashed #f2f2f2;
            .addrTit {
              color: #393d40;
              font-size: (14rem/16);
              cursor: pointer;
              .el-icon-location {
                margin-right: (10rem/16);
                color: #c6c9cc;
              }
            }
            p {
              margin-top: (10rem/16);
              margin-left: (15rem/16);
              display: none;
            }
            &.active {
              .el-icon-location {
                color: #00acc1;
              }
              p {
                display: block;
              }
            }
          }
        }
      }
      .cr-cont-right {
        overflow: hidden;
        .float-r {
          background: #fff;
          float: right;
          margin-bottom: (20rem/16);
        }
      }
    }
    &.box-bg-F7 {
      background: #f7f7f7;
      display: inline-block;
      padding-bottom:(20rem/16);
    }
  }
}

a{
    &.linkBtn{
        font-size:(14rem/16);
        color:#909399;
        text-decoration:none;
    }
}

span{
    &.f12{
        color:#C6C9CC;
        font-size:(12rem/16);
    }
}

.el-button{
    &.contactBtn{
        border-radius: 0;
        font-size:(14rem/16);
        background:rgb(217, 243, 246);
        color:rgb(53, 191, 207);
        border-color:#00ACC1;
        margin-bottom:(10rem/16);
    }
    &.color-00ACC1{
        background:#00ACC1;
        color:#FFF;
    }
}
</style>
