<template>
<div id = "root">
    <div id="boxone">
        <img src="../../assets/menu@3x.png" alt="" id="menu" @click="clickMenu">
           <span @click="clickAPEX" id="title">{{title}}</span>
        <img src="../../assets/Message@3x.png" alt="" id="message" @click="clickMessage">
rtrt
    </div>
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
      titleOne: 'Home'
    }
  },
  methods:{
    clickAPEX:function(){
      console.log('3333');
        // this.$router.push({ name:'GQB'  })
    },
     clickMenu:function(){
        alert('menu');
		this.$emit('clicknow1');
    },
    clickMessage:function(){
        alert('message');
    }
  }
  

}

</script>


<style>
#root{
    height:44px;
    width:100%;
}
#boxone{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: aqua; */
    height: 44px
}
#menu,#message{
    width: 24px;
    height: 24px;
    padding-left:15px;
}
#message{
    padding-right:15px;
}
#title{
    font-size: 20px;
    color: #ffffff;
    height: 20px;
    line-height: 20px;
}
</style>
