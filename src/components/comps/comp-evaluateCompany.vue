<template>
    <div class="evaluateCompany">
        <div class="lcont">
            <el-form ref="form" :model="form" label-width="80px" label-position="left">
                <el-form-item class="formItem" label="公司环境">
                    <el-rate v-model="form.companyEnv" ></el-rate>
                </el-form-item>
                <el-form-item class="formItem" label="面试官">
                    <el-rate v-model="form.interviewer" ></el-rate>
                </el-form-item>
                <el-form-item class="formItem" label="描述相符">
                    <el-rate v-model="form.describe" ></el-rate>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                companyEnv:null,
                interviewer:null,
                describe:null,
            }            
        }
    }
}
</script>

<style lang="scss" scoped>
.evaluateCompany{
    width:100%;
    .lcont{
        color:#737880;
        font-size:1rem;
        .formItem{
        /deep/ .el-form-item__label{
                line-height:(20rem/16);
            }
        }
    }
}
</style>
