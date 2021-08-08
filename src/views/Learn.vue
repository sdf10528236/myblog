<template>
  <div>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(data, index) in datalist"
          :key="index"
          :timestamp="data.date"
          placement="top"
        >
          <el-card>
            <h4>{{ data.title }}</h4>
            <h6 style="margin: 10px 0px 0px 0px">{{ data.detail }}</h6>
            <p style="margin: 40px 0px 0px 0px">
              {{ data.name }} 提交於 {{ data.date }} {{ data.time }}
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      datalist: [
        {
          date: "2021/08/08",
          time: "15:29",
          name: "李政穎",
          title: "大數據競賽UI介面",
          detail: "改進大數據競賽網頁UI介面",
          id: "1",
        },
        {
          date: "2021/08/08",
          time: "15:29",
          name: "李政穎",
          title: "大數據競賽UI介面",
          detail: "改進大數據競賽網頁UI介面",
          id: "2",
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.block {
  margin: 80px auto;
  max-width: 60%;
}
@media screen and (max-width: 760px) {
  .block {
    margin: 80px auto;
    max-width: 90%;
  }
}
</style>