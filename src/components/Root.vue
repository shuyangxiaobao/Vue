<template>
<div id = "root">
   <h1 @click="clickAPEX">{{titleOne}}</h1>
</div>
</template>

<script>

export default {
  name: 'RootName',
  props:{
    title:{
      type:String,
      default:"nimeide"
    }
  },
  data () {
    return {
      titleOne: 'APEX'
    }
  },
  methods:{
    clickAPEX:function(){
      console.log('3333');
        this.$router.push({ name:'APEXHome'})
    }
  }
  

}

</script>


<style>
</style>
