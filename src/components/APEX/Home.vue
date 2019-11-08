<template>
  <div id="homediv">
    <!-- <h1 @click="clickAPEX">{{titleOne}}</h1> -->
    <!-- <div> -->
          <TopView @clicknow1="clicknow2" title="Home"></TopView>
    <!-- </div> -->
    <div id="tempDiv"></div>
    <img src="../../assets/banner@3x.png" alt="" id="banner">
    <MarkDataTitle></MarkDataTitle>
    <HomeNews></HomeNews>
    <div style="height:49px"></div>
    <Bottom index="0"></Bottom>

  </div>
</template>

<script>
import TopView from "@/components/APEX/topView";
import Advertise from "@/components/APEX/advertise";
import MarkDataTitle from "@/components/APEX/markDataTitle";
import HomeNews from './homeNews';
import Bottom from './bottom'
import Data from './Data'

export default {
  name: "HomeName",
  props: {
    title: {
      type: String,
      default: "nimeide"
    }
  },
  data() {
    return {
      titleOne: "Home"
    };
  },
  methods: {
    clickAPEX: function() {
      console.log("3333");
    },
    clicknow2: function() {
      alert("22");
    }
  },
  components: {
    TopView,
    Advertise,
    MarkDataTitle,
    HomeNews,
    Bottom,
    Data
  }
};
</script>


<style>
#homediv {
  background-color:#21212b;
  width: 100%;
  /* height: 812px; */
  padding: 0;
  margin: 0;
  position: relative;
}

#banner{

  width: 95%;
  padding-top: 44px;  
}


</style>
