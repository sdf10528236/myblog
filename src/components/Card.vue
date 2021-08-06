<template>
  <div style="width: 100%" class="container">
    <el-row :gutter="30">
      <el-col :span="colume" v-for="data in datalist" :key="data.id">
        <b-card
          :header="data.cardclass"
          header-tag="header"
          :footer="data.time"
          footer-tag="footer"
          :title="data.title"
          class="card"
        >
          <b-card-text>{{ data.detail }}</b-card-text>
          <b-button href="#" variant="primary">更多....</b-button>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      colume: 24,
      datalist: [
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
        {
          cardclass: "Vue",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail:
            "初嘗Vue...的經驗asdaknfkjdfjgbekhjabrjhgbfajhkbrgjhdsgrbjahrbjghare",
        },
      ],
    };
  },
  beforeMount() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1000) {
      this.colume = 8;
    } else if (window.innerWidth >= 760) {
      this.colume = 12;
    } else {
      this.colume = 24;
    }
    console.log(this.colume);
  },
  mounted() {},
};
</script>



<style lang="scss" scoped>
/* reset */
.container {
  text-align: center;
}
.card {
  display: block;
  margin: 20px 0px;
}
</style>