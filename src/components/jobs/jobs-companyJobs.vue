<template>
    <div class="companyJobsLists">
        <companyHead ></companyHead>
        <div class="cr-box">
            <div class="cr-cont">
                <el-row>
                    <span class="outstandingTxt">职位类型</span>
                    <ul class="jobType">
                        <li>全部(13)</li>
                        <li>技术(2)</li>
                        <li>销售(6)</li>
                        <li class="active">生产制造(13)</li>
                    </ul>                    
                </el-row>
                <el-row style="margin-top:1.56rem">
                    <el-select class="jobSel" v-model="areaVal" placeholder="工作地区" size="mini">
                        <el-option v-for="item in areaOpt" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <el-select class="jobSel" v-model="experiVal" placeholder="工作经验" size="mini">
                        <el-option v-for="item in experiOpt" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <el-select class="jobSel" v-model="eduVal" placeholder="学历要求" size="mini">
                        <el-option v-for="item in educationOpt" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                    <el-select class="jobSel" v-model="wageVal" placeholder="薪资要求" size="mini">
                        <el-option v-for="item in wagesOpt" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-row>
            </div>            
        </div>

        <div class="cr-box box-bg-F7">
            <div class="cr-cont">
                <jobListItem ></jobListItem>
                <jobListItem ></jobListItem>
                <jobListItem ></jobListItem>
                <jobListItem ></jobListItem>
            </div>
        </div>
    </div>
</template>

<script>
import companyHead from "../comps/comp-companyHead";
import jobListItem from '../comps/comp-jobsListItem';

export default {
    name:'jobsCompanyJobsLists',
    components:{companyHead,jobListItem},
    data(){
        return{
            areaOpt:[
                {value:'guangzhou',label:'广州'},
                {value:'yangjiang',label:'阳江'},
                {value:'beijing',label:'北京'}
            ],
            experiOpt:[
                {value:'experi01',label:'1-2年经验'},
                {value:'experi02',label:'2-4年经验'},
                {value:'experi03',label:'4年经验以上'},
                {value:'experi04',label:'不限'}
            ],
            educationOpt:[
                {value:'edu01',label:'中专'},
                {value:'edu02',label:'高中'},
                {value:'edu03',label:'大专'},
                {value:'edu04',label:'本科'},
                {value:'edu05',label:'不限'},
            ],
            wagesOpt:[
                {value:'wage01',label:'3K~4K'},
                {value:'wage02',label:'4K~6K'},
                {value:'wage03',label:'6K~10K'}
            ],
            areaVal:'',
            experiVal:'',
            eduVal:'',
            wageVal:''
        }
    }
}
</script>

<style lang="scss" scoped>
.companyJobsLists{
    .cr-box{
        background: #FFF;
        width: 100%;
        .cr-cont {
            width: (1000rem/16);
            height:100%;
            margin: 0 auto;
            padding: (24rem/16) 0 (20rem/16);
            font-size:(14rem/16);
            color:#737880;
            .outstandingTxt{
                color:#393D40;
                float:left;
            }
            .jobType{
                float:left;                
                li{
                    float:left;
                    margin-left:(24rem/16);
                    &.active{
                        color:#00ACC1;
                    }
                }                
            }
            .jobSel{
                width:(120rem/16);
                margin-left:(-15rem/16);
                margin-right:(24rem/16);
                /deep/ .el-input__inner{
                    border:none;
                    font-size:(14rem/16)
                }
            }
        }
        &.box-bg-F7 {
            background: #f7f7f7;
            display: inline-block;
            padding-bottom:(20rem/16);
        }
    }

    ul{
        margin:0;
        padding:0;
        li{list-style:none;} 
    }
}
</style>

