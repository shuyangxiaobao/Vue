<template>
  <div id="root">
    <div id="boxone">
      <img src="../../assets/menu@3x.png" alt id="menu" @click="clickMenu" />
      <span @click="clickAPEX" id="title">{{title}}</span>
      <img src="../../assets/Message@3x.png" alt id="message" @click="clickMessage" />
    </div>
  </div>
</template>

<script>
var screenWidth = document.body.scrollWidth  ;
// var screenWidth = window.screen.width;
 

 


export default {
  name: "RootName",
  props: {
    title: {
      type: String,
      default: "nimeide"
    }
  },
  data() {
    return {
      titleOne: "Home",
      screenWidth: screenWidth
    };
  },
  methods: {
    clickAPEX: function() {
      console.log("3333");
      // this.$router.push({ name:'GQB'  })
    },
    clickMenu: function() {
      alert("menu");
      this.$emit("clicknow1");
    },
    clickMessage: function() {
      alert("message");
      alert(this.screenWidth);
    }
  },
  beforeUpdate:function(){
    // $("#boxone").css("width", this.screenWidth);
  },

  mounted: function() {
    // $("#boxone").css("width", this.screenWidth);
  }
};

window.onresize = function(){
    // $("#boxone").css("width", this.screenWidth);
        // $("#boxone").css("width", screenWidth);
        // alert(screenWidth);
      // alert(screenWidth);

}
</script>


<style>
#root {
  height: 44px;
}
#boxone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #21212b;
  width: 100%;
  position: fixed;
  /* z-index: 999; */
  top: 0;
}
#menu,
#message {
  width: 24px;
  height: 24px;
  padding-left: 15px;
}
#message {
  padding-right: 15px;
}
#title {
  font-size: 20px;
  color: #ffffff;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
</style>
