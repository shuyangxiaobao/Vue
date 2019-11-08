<template>
  <div id="app">
    <router-view @tap1="tap"/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Geqiangbao from '@/components/geqiangbao'
export default {
  name: 'App',
  components:{
    HelloWorld,
    Geqiangbao
  },
  methods:{
    tap:function(){
       alert('success');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin: 0;
  padding: 0;
  background-color: #21212b;
  position: relative;
}
ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
