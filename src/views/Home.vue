<template>
  <div>
    <banner v-show="isbannershow" style="width100%" />
    <transition name="fade">
      <div class="block" v-show="isheadshow">
        <img src="../assets/self.jpg" />
        <h3>Gheng-Ying Lee</h3>
      </div>
    </transition>
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
    setTimeout(this.showhead, 1500);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
    padding: 8%;
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
    padding: 8%;
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