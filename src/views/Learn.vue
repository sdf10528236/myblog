<template>
  <div>
    <el-container>
      <el-aside>
        <tabtree class="tree"></tabtree>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import tabtree from "@/components/Tabtree";
export default {
  components: {
    tabtree,
  },
};
</script>

<style lang="scss" scoped>
.tree {
  margin: 60px 0px 0px 30px;
}
</style>