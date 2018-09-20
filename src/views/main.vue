<template>
    <div class="homepage">
        <headerBar></headerBar>
        <router-view/>
        <footerBar></footerBar>
    </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import footerBar from '@/components/footerBar'

export default {
    name:'homepage',
    components:{headerBar,footerBar},
    data(){
        return{
            
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
