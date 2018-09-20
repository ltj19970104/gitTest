<template>
    <div class="companyRecordCont">
        <companyHead ></companyHead>
        <div class="cr-box">
            <div class="cr-cont">
                <div class="cr-head">
                    <span class="tit-fs16">热招职位</span>
                    <a class="linkBtn" href="#">查看全部{{jobCount}}个职位<i class="el-icon-arrow-right"></i></a>
                </div>
                <div class="cr-head-flex">
                    <hotJobs /><hotJobs /><hotJobs />
                </div>
            </div>
        </div>
        <div class="cr-box box-bg-F7">
            <div class="cr-cont">
                <div class="cr-cont-left">
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
                    <section>
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
                    <section>
                        <h5>面试评价</h5>
                        <p>
                          <el-row>
                            <el-col :span="24">
                              综合得分
                              <el-rate class="bigStar inblock" v-model="tmpVal" size="medium"></el-rate>
                              <span class="font-c6c9cc">（评价数957）</span>
                            </el-col>
                          </el-row>
                          <el-row style="margin-top:1.6875rem;">
                            <el-col :span="8">
                              描述相符：<el-rate class="inblock" v-model="tmpVal"></el-rate>
                            </el-col>
                            <el-col :span="8">
                              面试官：<el-rate class="inblock" v-model="tmpVal"></el-rate>
                            </el-col>
                            <el-col :span="8">
                              公司环境：<el-rate class="inblock" v-model="tmpVal"></el-rate>
                            </el-col>
                          </el-row>                            
                        </p>

                        <div class="vline"></div>

                        <ul>
                          <li class="appraiseItem">
                            <el-row>
                              <el-col :span="4">
                                <img class="joberImg" :src="jober[0].jobsavatar" />{{jober[0].jobername}}
                              </el-col>
                              <el-col :span="2">
                                <i class="vline"></i>
                              </el-col>
                              <el-col :span="7">
                                综合评分：<el-rate class="inblock" v-model="jober[0].jobsrate"></el-rate>
                              </el-col>
                              <el-col :span="2">
                                <i class="vline"></i>
                              </el-col>
                              <el-col :span="6">
                                面试职位：<span class="hightFont">{{jober[0].jobposition}}</span>
                              </el-col>
                              <el-col :span="3" style="text-align:right;">
                                {{jober[0].date}}
                              </el-col>
                            </el-row>
                          </li>
                          <li class="appraiseItem">
                            <el-row>
                              <el-col :span="4">
                                <img class="joberImg" :src="jober[0].jobsavatar" />{{jober[0].jobername}}
                              </el-col>
                              <el-col :span="2">
                                <i class="vline"></i>
                              </el-col>
                              <el-col :span="7">
                                综合评分：<el-rate style="display:inline-block;" v-model="jober[0].jobsrate"></el-rate>
                              </el-col>
                              <el-col :span="2">
                                <i class="vline"></i>
                              </el-col>
                              <el-col :span="6">
                                面试职位：<span class="hightFont">{{jober[0].jobposition}}</span>
                              </el-col>
                              <el-col :span="3" style="text-align:right;">
                                {{jober[0].date}}
                              </el-col>
                            </el-row>
                          </li>                          
                        </ul>
                    </section>
                    <p class="txtCenter">
                      <el-button>更多评论</el-button>
                    </p>
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
import hotJobs from "../comps/comp-hotJobs";
import companyEnv from "./jobs-companyEnv";
import detailList from "./jobs-detailList";
import companyHead from "../comps/comp-companyHead";

export default {
  name: "jobsCompanyRecord",
  components: { hotJobs, companyEnv, detailList,companyHead },
  props: [],
  data() {
    return {
      jobCount: 13,
      tmpVal: null,
      jober:[
        {
          jobsavatar: require('../../assets/images/jobsavatar.png'),
          jobername:"张三",
          jobsrate:3,
          jobposition:"财务主管",
          date:"2018/08/31"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.companyRecordCont {
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
        .appraiseItem{
          font-size:(14rem/16);
          color:  #737880;
          line-height:(24rem/16);
          margin-bottom:(20rem/16);
          .joberImg{
            width:(24rem/16);
            height:(24rem/16);
            margin-right:(14rem/16);
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

.el-rate.bigStar{
  /deep/ .el-rate__icon{
    font-size:(20rem/16);
  }
}
.hightFont {
  color: #393d40;
}
.vline {
  background-color: #e3e4e6;
  width: (1rem/16);
  height: (12rem/16);
  margin: 0 (9rem/16);
  display: inline-block;
}
ul {
  margin: 0;
  padding: 0;
  li,
  ol {
    margin: 0;
    list-style: none;
  }
}

.inblock{
  display:inline-block;
  line-height:(14rem/16);
}
</style>