<template>
    <div class="jobListItem">
        <el-row>
            <el-col :span="14">
                <hotJobComp />
            </el-col>
            <el-col :span="10">
                <consultHRComp />
            </el-col>
        </el-row>
        <div class="hline"></div>
    </div>
</template>

<script>
import hotJobComp from '../comps/comp-hotJobs';
import consultHRComp from '../comps/comp-consultHR';

export default {
    name:'jobListItem',
    components:{hotJobComp,consultHRComp},
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .jobListItem{
        width:100%;
        height: (150rem/16);
        background:#fff;
        padding:(25rem/16) (30rem/16);
        /deep/ .hotJobsBox{
            padding:0;
            height:(110rem/16);
        }
        .hline{
            background:#E3E4E6;
            height:1px;
            margin:(13rem/16) auto 0;
        }
        
    }
</style>

