<template>
  <div>
    <banner v-show="isbannershow" style="width100%" />
    <div class="block" v-show="isheadshow">
      <img src="../assets/self.jpg" />
      <h3>Gheng-Ying Lee</h3>
    </div>
    <card />
    <div class="bottom">
      <el-button type="info" plain>看更多....</el-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import banner from "@/views/Home/Banner";
import card from "@/components/Card";

export default {
  data() {
    return {
      isbannershow: true,
      isheadshow: false,
    };
  },
  components: {
    banner,
    card,
  },
  mounted() {
    setTimeout(this.showhead, 2000);
  },
  methods: {
    showhead() {
      this.isbannershow = !this.isbannershow;
      this.isheadshow = !this.isheadshow;
      console.log(this.isbannershow);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
  width: 100%;
  padding: 11%;
  margin: 0px 0px;
  background-color: rgb(255, 204, 109);

  img {
    height: 60px;
    width: 60px;
    border-radius: 100px;
  }
  h3 {
    margin: 25px;
  }
}
.bottom {
  text-align: right;
  width: 70%;
  margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
  .block {
    padding: 62px;
    h3 {
      font-size: 26px;
    }
  }
}
.bottom {
  text-align: right;
  width: 80%;
  margin-bottom: 30px;
}
@media screen and (max-width: 320px) {
  .block {
    padding: 62px;
    h3 {
      font-size: 16px;
    }
  }
}
.bottom {
  text-align: right;
  width: 80%;
  margin-bottom: 30px;
}
</style>