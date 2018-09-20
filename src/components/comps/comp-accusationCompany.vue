<template>
    <div class="accusationComp">
        <ul class="lcont">
            <li>
                <el-radio v-model="radio" label="salary">薪资不真实</el-radio>
            </li>
            <li>
                <el-radio v-model="radio" label="experience">工作经验或学历要求不真实</el-radio>
            </li>
            <li>
                <el-radio v-model="radio" label="compinfo">公司信息不真实</el-radio>
            </li>
            <li>
                <el-radio v-model="radio" label="advert">广告</el-radio>
            </li>
            <li>
                <el-radio v-model="radio" label="pyramidSales">传销</el-radio>
            </li>
            <li>
                <el-radio v-model="radio" label="other">其他</el-radio>
            </li>
        </ul>

        <div class="rcont">
            <el-input type="textarea" v-model="txtArea" rows="7" resize="none" placeholder="请输入内容"></el-input>
        </div>

    </div>
</template>

<script>
export default {
    name:'accusation',
    data(){
        return{
            radio:'',
            txtArea:''
        }
    }
}
</script>

<style lang="scss" scoped>
.accusationComp{
    width:100%;
    .lcont{
        width:45%;
        margin:0;
        margin-left:(15rem/16);
        padding:0;
        display:inline-block;
        li,ol{
            list-style:none;
        }
    }
    .rcont{
        width:50%;
        display:inline-block;
    }
}
</style>
