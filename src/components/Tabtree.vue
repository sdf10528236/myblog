<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      data: [
        {
          label: "C++",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "教學影片推薦",
              children: [
                {
                  label: "台大開放式課程-計算機程式",
                },
              ],
            },
          ],
        },
        {
          label: "Python",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Vue.js",
          children: [
            {
              label: "Vue介紹",
            },
            {
              label: "教學影片推薦",
              children: [
                {
                  label: "千锋Web前端教程(youtube)",
                },
              ],
            },
          ],
        },
        {
          label: "Javascript",
          children: [
            {
              label: "Javascript介紹",
            },
            {
              label: "教學影片推薦",
              children: [
                {
                  label: "千锋Web前端教程(youtube)",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>



<style lang="scss" scoped>
/* reset */
</style>