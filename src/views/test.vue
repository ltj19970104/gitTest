<template>
  <div id="law">
    <div class="container">
      <div class="divTopBar">
        <el-radio-group class="radioButton" v-model="selectLaw">
          <el-radio-button style="outline:none" label="劳动法"></el-radio-button>
          <el-radio-button style="outline:none" label="合同法"></el-radio-button>
        </el-radio-group>
        <div class="divSearch">
          <el-input class="seekTool" v-model="searchInput" placeholder="请输入内容"></el-input>
          <el-button class="elButton">搜索</el-button>
        </div>
      </div>
      <div class="divMidContent">
        <el-carousel trigger="hover" arrow="never" height="340px" style="width:300px">
          <el-carousel-item v-for="element in elements" :key="element.title">
            <div>
              <p class="textTitle">{{ element.title }}</p>
              <p class="textDate">{{ element.time }}</p>
              <p class="textContent">{{ element.content }}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
        <img :src="images.image1" alt="" width="700px" height="340px">
      </div>
      <div class="divBottomContent" v-for="content in contents" :key="content.title">
        <div class="contentClass">
          <div class="imgDiv">
            <img :src="content.image" alt="" width="200px" height="140px">
          </div>
          <div class="innerClass">
            <p class="innerTextTitle">{{ content.title }}</p>
            <p class="innerTextContent">{{ content.content }}</p>
            <div>
              <span>{{ content.date }}</span>
              <span class="divide">|</span>
              <span>{{ content.type }}</span>
            </div>
          </div>
        </div>
        <div class="division"></div>
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

<script>
export default {
  name: 'law',
  data () {
    return {
      images: {
        image1: require('../assets/images/law_pic.png')
      },
      selectLaw: '劳动法',
      searchInput: '',
      elements: [
        {
          title: '重大变化！科技和教育不再由一位副总理分管',
          time: '2018/09/01',
          content: '在中国十三届全国人大一次会议上，习近平新时代中国特色社会主义思想载入宪法，习近平总书记全票当选国家主席、中央军委主席，这是全体中国人民的共同心愿。中国司法机关将认真贯彻习近平新时代中国特色社会主义思想，着眼构建人类命运共同体，以两国元首共识为指引，与南非有关部门深化合作，努力使司法合作在中南全面战略伙伴关系中走在前列。'
        },
        {
          title: '科技和教育不再由一位副总理分管',
          time: '2018/09/01',
          content: '在中国十三届全国人大一次会议上，习近平新时代中国特色社会主义思想载入宪法，习近平总书记全票当选国家主席、中央军委主席，这是全体中国人民的共同心愿。中国司法机关将认真贯彻习近平新时代中国特色社会主义思想，着眼构建人类命运共同体，以两国元首共识为指引，与南非有关部门深化合作，努力使司法合作在中南全面战略伙伴关系中走在前列。'
        },
        {
          title: '重大变化！',
          time: '2018/09/01',
          content: '在中国十三届全国人大一次会议上，习近平新时代中国特色社会主义思想载入宪法，习近平总书记全票当选国家主席、中央军委主席，这是全体中国人民的共同心愿。中国司法机关将认真贯彻习近平新时代中国特色社会主义思想，着眼构建人类命运共同体，以两国元首共识为指引，与南非有关部门深化合作，努力使司法合作在中南全面战略伙伴关系中走在前列。'
        },
        {
          title: '大变化！科技和教育不再由一位副总理分管',
          time: '2018/09/01',
          content: '在中国十三届全国人大一次会议上，习近平新时代中国特色社会主义思想载入宪法，习近平总书记全票当选国家主席、中央军委主席，这是全体中国人民的共同心愿。中国司法机关将认真贯彻习近平新时代中国特色社会主义思想，着眼构建人类命运共同体，以两国元首共识为指引，与南非有关部门深化合作，努力使司法合作在中南全面战略伙伴关系中走在前列。'
        },
        {
          title: '！科技和教育不再由一位副总理分管',
          time: '2018/09/01',
          content: '在中国十三届全国人大一次会议上，习近平新时代中国特色社会主义思想载入宪法，习近平总书记全票当选国家主席、中央军委主席，这是全体中国人民的共同心愿。中国司法机关将认真贯彻习近平新时代中国特色社会主义思想，着眼构建人类命运共同体，以两国元首共识为指引，与南非有关部门深化合作，努力使司法合作在中南全面战略伙伴关系中走在前列。'
        }
      ],
      contents: [
        {
          title: '佛山中院民一庭刘红庭长一行到我院调研民事审判工作',
          image: require('../assets/images/lawContent_pic1.png'),
          date: '2018/03/08',
          content: '1月25日下午，佛山中院民一庭庭长刘红等一行六人到我院针对民事审判实践中遇到的热点、难点问题开展专题调研。我院党组副书记、副院长吴建兴和相关业务庭代表参加了调研座谈会。',
          type: '十三大，法院，时政'
        },
        {
          title: '我院举办妇女节法制宣传教育系列活动',
          image: require('../assets/images/lawContent_pic2.png'),
          date: '2018/03/08',
          content: '3月7日，我院分别在院部及北滘法庭举办“三八”国际妇女节法制宣传教育系列活动，以发放法律宣传小册、观看家事案件庭审直播、举办专题讲座的形式...',
          type: '十三大，法院，时政'
        },
        {
          title: '我院党组书记、院长万选才同志为全体干警上党课',
          image: require('../assets/images/lawContent_pic3.png'),
          date: '2018/03/08',
          content: '10月13日下午，我院党组书记、院长万选才同志以《与党的十九大共成长》为题给全院干警上了一堂生动的党课。',
          type: '十三大，法院，时政'
        }
      ]
    }
  },
  methods: {
    test: function () {
    },
    toTop(){
      (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
      })();
    }
  }
}
</script>

<style>
.el-carousel__button{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  outline: none;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#law{
  height: 100%;
  background:#f2f2f2;
  overflow-x: hidden;
  .container{
    position: relative;
    margin: 20px auto;
    padding: 0;
    width: 1000px;
    .divTopBar{
      display: flex;
      justify-content:space-between;
      margin-bottom:10px;
      .divSearch{
        display:flex;
        justify-content:center;
        .el-input{
          width:280px;
        }
        .el-button{
          height: 40px;
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
    .divMidContent{
      display: flex;
      justify-content:space-between;
      margin-bottom:10px;
      margin-bottom:20px;
      .el-carousel__item {
        font-family:PingFangSC-Regular;
        font-weight:400;
        background-color: #393d40;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        box-sizing: border-box;
        padding: 31px 24px 62px 24px;
        div{
          box-sizing: content-box;
          width:252px;
          max-height: 245px;
          overflow-y:hidden;
          .textTitle{
            color:#FFFFFF;
            font-size: 20px;
            text-align:left;
            margin-bottom: 8px;
          }
          .textDate{
            color:#909399;
            font-size: 14px;
            text-align:left;
            margin-bottom: 16px;
          }
          .textContent{
            color:#E3E4E6;
            font-size: 16px;
            text-align:left;
          }
        }
      }
    }
    .divBottomContent{
      box-sizing: border-box;
      width: 100%;
      height: inherit;
      margin-top: 0px;
      padding: 24px 24px 0px 24px;
      text-align: center;
      background-color: white;
      .contentClass{
        box-sizing: content-box;
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:24px;
        .imgDiv{
          box-sizing: content-box;
          width:200px;
        }
        .innerClass{
          box-sizing: content-box;
          width: 728px;
          display: flex;
          flex-direction:column;
          justify-content:center;
          align-items:flex-start;
          margin-left: 24px;
          .innerTextTitle{
            width:728px;
            height:26px;
            font-size:26px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(57,61,64,1);
            text-align:left;
            line-height:26px;
            margin-bottom: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .innerTextContent{
            width:728px;
            max-height:54px;
            font-size:16px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(115,120,128,1);
            text-align:left;
            line-height:26px;
            margin-bottom: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          div{
            font-size: 12px;
            color: #909399;
            font-weight:400;
            font-family:PingFangSC-Regular;
            height:18px;
            .divide{
              margin:0px 8px;
            }
          }
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
.radioButton{
  /deep/ .el-radio-button__inner{
      border-radius:0;
  }
  /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background:#00ACC1;
  }
}
.seekTool{
    /deep/ .el-input__inner{
        border-radius: 0;
    }
    /deep/ .el-input-group__append{
        border-radius: 0;
        background: #00ACC1;
        color:#FFF;
    }
}
.division{
  width: 100%;
  height: 1px;
  background-color: #e3e4e5;
}
</style>
