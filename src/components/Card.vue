<template>
  <div style="background-color: red; width: 100%">
    <el-row>
      <el-col :span="12"> <div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">11</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */

export default {};
</script>



<style lang="scss" scoped>
/* reset */
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  display: inline-block;
  margin: 20px;
}
</style>