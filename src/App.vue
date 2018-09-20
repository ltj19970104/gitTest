<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }
  }
}
</script>

<style>
@import "./assets/iconfont/iconfont.css";
html,body{
  margin: 0;
  padding: 0;
  line-height: normal;
  /* height: 100%; */
}
*{
  outline:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* height: 100%; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
