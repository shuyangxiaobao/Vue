<template>
  <div id="homediv">
    <!-- <h1 @click="clickAPEX">{{titleOne}}</h1> -->
    <TopView @clicknow1="clicknow2" title="Home"></TopView>
    <img src="../../assets/banner@3x.png" alt="" id="banner">
    <!-- <Advertise></Advertise> -->
    <MarkDataTitle></MarkDataTitle>
  </div>
</template>

<script>
import TopView from "@/components/APEX/topView";
import Advertise from "@/components/APEX/advertise";
import MarkDataTitle from "@/components/APEX/markDataTitle";

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
    MarkDataTitle
  }
};
</script>


<style>
#homediv {
  background-color: #21212b;
  width: 100%;
  /* height: 812px; */
  padding: 0;
  margin: 0;
}

#banner{
  width: 95%;
  padding-top: 5px;  
}
</style>
