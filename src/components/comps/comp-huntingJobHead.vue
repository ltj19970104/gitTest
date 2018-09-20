<template>
    <div class="huntingJobHead" :class="isPickUp==true?'pickup':''">
        <div class="cont">
            <el-row class="searchTool">
                <el-col :span="16">
                    <el-tag v-for="tag in tags" :key="tag" :type="tag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                </el-col>
                <el-col :span="8" style="float:right;">
                    <el-input class="js-seekTool" size="medium" placeholder="请输入搜索内容" >
                        <el-button slot="append" >搜索</el-button>
                    </el-input>
                </el-col>
            </el-row>
            
            <el-row class="seekcondition">
                <el-col :span="2">
                    <span class="tit">工作地点</span>
                </el-col>
                <el-col :span="20">
                    <ul>
                        <li v-for="(item,index) in jobArea" :key="'jobArea'+index" >{{item}}</li>
                    </ul>
                </el-col>
                <el-col :span="2">
                    <el-button type="text" size="mini">更多 <i class="el-icon-arrow-down"></i></el-button>
                </el-col>
            </el-row>
            <el-row class="seekcondition">
                <el-col :span="2">
                    <span class="tit">职位类型</span>
                </el-col>
                <el-col :span="20">
                    <ul>
                        <li v-for="(item,index) in jobType" :key="'jobArea'+index" >{{item}}</li>
                    </ul>
                </el-col>
                <el-col :span="2">
                    <el-button type="text" size="mini">更多 <i class="el-icon-arrow-down"></i></el-button>
                </el-col>
            </el-row>
            <el-row class="seekcondition">
                <el-col :span="2">
                    <span class="tit">公司行业</span>
                </el-col>
                <el-col :span="20">
                    <ul>
                        <li v-for="(item,index) in companyType" :key="'jobArea'+index" >{{item}}</li>
                    </ul>
                </el-col>
                <el-col :span="2">
                    <el-button type="text" size="mini">更多 <i class="el-icon-arrow-down" ></i></el-button>
                </el-col>
            </el-row>

            <el-row class="seekDetailsCond">
                <el-col :span="21">
                    <el-select class="js-select" v-model="workexpVal" placeholder="工作经验" size="mini">
                        <el-option v-for="item in workexp" :key="item.value" :label="item.label" :value="item.value" ></el-option>
                    </el-select>
                    <el-select class="js-select" v-model="educationalVal" placeholder="学历要求" size="mini">
                        <el-option v-for="item in educational" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-select class="js-select" v-model="salaryVal" placeholder="薪资要求" size="mini">
                        <el-option v-for="item in salary" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-select class="js-select" v-model="companySizeVal" placeholder="企业规模" size="mini">
                        <el-option v-for="item in companySize" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-select class="js-select" v-model="enterpriseVal" placeholder="企业类型" size="mini">
                        <el-option v-for="item in enterprise" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-button type="text" size="mini">清空筛选条件</el-button>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tags:['云城区','生产制造','互联网',],
            jobArea:['不限','云城区','云安区','新兴县','郁南县','罗定市'],
            jobType:['不限','技术','产品','运营','市场','销售','生产制造','物流/供应链','采购/贸易'],
            companyType:['不限','制造行业','电子商务','互联网','服务业','媒体','工程施工'],
            workexp:[
                {value:'不限',label:'不限'},
                {value:'1-2年',label:'1-2年'},
                {value:'2-3年',label:'2-3年'},
                {value:'3年以上',label:'3年以上'},
            ],
            educational:[
                {value:'不限',label:'不限'},
                {value:'中专',label:'中专'},
                {value:'大专',label:'大专'},
                {value:'本科',label:'本科'},
            ],
            salary:[
                {value:'面谈',label:'面谈'},
                {value:'3K-4K',label:'3K-4K'},
                {value:'4k-5K',label:'4k-5K'},
                {value:'5K以上',label:'5K以上'},
            ],
            companySize:[
                {value:'不限',label:'不限'},
                {value:'50人以下',label:'50人以下'},
                {value:'50-100人',label:'50-100人'},
                {value:'100人以上',label:'100人以上'},
            ],
            enterprise:[
                {value:'不限',label:'不限'},
                {value:'私企',label:'私企'},
                {value:'民企',label:'民企'},
                {value:'外资',label:'外资'},
                {value:'合资',label:'合资'},
            ],
            workexpVal:'',
            educationalVal:'',
            salaryVal:'',
            companySizeVal:'',
            enterpriseVal:'',
            isPickUp:false
        }
    },
    methods:{
        handleClose(tag){
            this.tags.splice(this.tags.indexOf(tag),1);
        },
        handleScroll(){
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop=document.querySelector('.huntingJobHead').offsetTop;
            if(scrollTop>200){
                this.isPickUp=true;
            }else{
                this.isPickUp=false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
.huntingJobHead{
    width:100%;
    height:(255rem/16);
    background:#FFF;
    box-shadow:0 1px 10px 0px rgba(0,0,0,0.1);
    .cont{
        width:(1000rem/16);
        height: 100%;
        margin:0 auto;
        .searchTool{
            line-height:(40rem/16);
            padding-top:(24rem/16);
            .el-tag{
                margin-right:(10rem/16);
                display:none;
            }
            .js-seekTool{
                float:right;
            }
        }
        .seekcondition{
            height:(28rem/16);
            line-height:(28rem/16);
            color:#737880;
            font-size:(14rem/16);
            margin:(13rem/16) 0;
            .tit{
                color:#393D40;
                font-weight:500;
            }
            li{                
                margin-right:(24rem/16);
                cursor: pointer;
                &.active{
                    color:#00ACC1;
                    font-size:1rem;
                }
            }
        }
        .seekDetailsCond{
            border-top:(1rem/16) solid #E3E4E6;
            height:(45rem/16);
            line-height:(45rem/16);
        }        
    }
    &.pickup{
        height:(115rem/16);
        position: fixed;
        top:0;
        z-index:1000;
        .cont{
            .searchTool{
                .el-tag{
                    display:inline-block;
                }
            }
        }
        .seekcondition{
            display:none;
        }
        .seekDetailsCond{
            border:none;
        }
    } 
}

.js-select{
    width:(100rem/16);
    margin-right:(20rem/16);
    /deep/ .el-input__inner{
        border:none;
    }

}

.js-seekTool{
    /deep/ .el-input__inner{
        border-radius: 0;
    }
    /deep/ .el-input-group__append{
        border-radius: 0;
        background: #00ACC1;
        color:#FFF;
    }
}

.el-button{
    outline:none;
    color:#AAAEB3;
}

ul{
    margin:0;
    padding:0;
    li,ol{
        list-style:none;
        float:left;
    }
}

</style>
