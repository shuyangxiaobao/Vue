<template>
  <div id="markDataTitle">
    <div id="mark">
      <p id="markTitle">Market Data</p>
      <img :src="moreImg" alt id="moreimg" />
    </div>
    <ul>
      <li v-for="(item,index) in datas" :key="index" @click="liClick(item)">
        <div class="divdata">
          <div style="display: flex;flex-direction: column;width: 80.3%;">
            <div id="topView">
              <label for class="instrumentIDClass">{{item.title}}</label>
              <label for class="lastPriceClass">{{item.lastPrice}}</label>
            </div>
            <div id="bottomView">
              <label for class="volumeClass">Vol:{{item.volume}}</label>
              <label for class="openinsetClass">OI:{{item.openPositions}}</label>
              <label for class="upperDownClass">{{item.upDownPercent/100}}%</label>
            </div>
          </div>
          <!-- "../../assets/Collection@3x.png" -->
          <img v-if="item.collectStatus" :src="collectClick" class="collectimg" />
          <img v-if="!item.collectStatus" :src="collect" class="collectimg" />
          <!-- <img src="@../../assets/banner.png" alt=""> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// let imgurl = ""
import collect from "../../assets/Collection@3x.png";
import collectClick from "../../assets/Collection-Click@3x.png";
import moreImg from "../../assets/more@3x.png";

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
      titleOne: "APEX",
      datas: [],
      collect: collect,
      collectClick: collectClick,
      moreImg: moreImg
    };
  },
  methods: {
    clickAPEX: function() {
      console.log("3333");
      // this.datas = "2323322323";
      this.loadData(this);

      // this.$router.push({ name:'GQB'  })
    },
    loadData: function(obj) {
      $.ajax({
        url: "http://rap2api.taobao.org/app/mock/233798/marketdata",
        type: "GET", //请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {
          //请求成功完成后要执行的方法
          console.log(data);
          // for (var key in data.data) {
          //   var value = data.data[key];
          //   if (value.collectStatus === true) {
          //     value.collecturl = "../../assets/banner.png";
          //   } else {
          //     value.collecturl = "../../assets/Collection-Click@3x.png";
          //   }
          //   value.collecturl =
          //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572276227338&di=e5ad63ad5fb0726f9191a6a9b164d96e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F09%2F20180709235634_HEh8H.thumb.700_0.jpeg";
          //   value.collecturl = "../../assets/banner.png";
          //   obj.datas.push(value);
          // }
          obj.datas = data.data;
          console.log("😄");
        }
      });
    },

    liClick: function(model) {
      alert(model.lastPrice);
    }
  },

  mounted: function() {
    this.loadData(this);
  }
};
</script>


<style>
.divdata {
  /* padding-left: 4%; */
  /* padding-right: 4%; */
  /* width: 92%; */
  height: 68px;
  background-color: #282834;
  margin-bottom: 8px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#topView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.instrumentIDClass {
  color: #ffffff;
  font-size: 14px;
  padding-top: 9px;
  height: 22px;
  line-height: 22px;
  padding-left: 20px;
}

.lastPriceClass {
  color: #ffffff;
  font-size: 14px;
  padding-top: 9px;
  height: 22px;
  line-height: 22px;
  margin-left: 50%;
}

#bottomView {
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.volumeClass {
  color: #7e829d;
  font-size: 12px;
  padding-top: 14px;
  padding-left: 20px; /* width: 100px; */
}

.openinsetClass {
  color: #7e829d;
  font-size: 12px;
  padding-top: 14px;
  padding-right: 29%; /* width: 200px; */
}

.upperDownClass {
  color: #ffffff;
  background-color: #fc3e30;
  width: 52px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  font-size: 12px;
  float: right;
  border-radius: 4px;
}
.collectimg {
  width: 28px;
  height: 28px;
  padding-right: 5.8%;
}
#bottomdiv {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #282834;
  display: flex;
}
#bottomul {
  display: flex;
}

.bottomli {
  display: flex;
  width: 25%;
  height: 49px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.bottomdivimg {
  width: 20px;
  height: 20px;
  padding-top: 8px;
}
.bottomLab {
  height: 13px;
  color: #ffffff;
  padding-top: 4px;
  font-size: 11px;
  text-align: center;
}

.newstitle {
  margin: 19px 15px 0 15px;
  height: 48px;
  line-height: 24px;
  color: #ffffff;
  font-size: 15px;
  /* width: 100%; */
  overflow: hidden;
  overflow-wrap: break-word;
}
.time {
  color: #7e829d;
  font-size: 11px;
  margin: 9px 0 21px 15px;
}

.liulan {
  color: #7e829d;
  font-size: 11px;
  margin: 9px 0 21px 5.3%;
}

#mark {
  width: 100%;
  height: 24px;
  /* background-color: #fc3e30; */
  margin-top: 10px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
}

#markTitle {
  /* padding: 0 0 0 15px; */
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  height: 24px;
  line-height: 24px;
  padding: 0 0 0 15px;
  margin: 0;
}
#moreimg {
  width: 16px;
  height: 16px;
  margin: 4px 15px 0 0 ;
  text-align: right;
}
</style>
