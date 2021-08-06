<template>
  <div style="width: 100%" class="container">
    <el-row>
      <el-col :span="24" v-for="data in datalist" :key="data.id">
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">{{ data.title }}</h2>
          </a>
          <el-tag style="margin-bottom: 15px" size="mini" type="info">{{
            data.class
          }}</el-tag>
          <a>
            <h3 class="post-subtitle">
              {{ data.detail }}
            </h3>
          </a>
          <p class="post-meta">
            Publication Date:
            {{ data.time }}
          </p>
        </div>
        <hr class="my-4" />
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
          class: "Vue.js",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail: "初嘗Vue.js...",
        },
        {
          class: "Vue.js",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail: "初嘗Vue...的經驗asdahrbjghare",
        },
        {
          class: "Vue.js",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail: "初嘗Vue...的經驗ajghare",
        },
        {
          class: "Vue.js",
          title: "Vue 實戰",
          time: "2021/08/06",
          detail: "初嘗Vue...的經驗abjahrbjghare",
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
  width: 90%;
  overflow: hidden;
}
.post-preview {
  text-align: left;
  a {
    :hover {
      text-decoration: none;
      color: #0085a1;
    }

    text-decoration: none;
    color: #212529;
    .post-title {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 1.875rem;
      margin-top: 1.875rem;
      margin-bottom: 0.625rem;
    }
    .post-subtitle {
      font-weight: 300;
      margin-bottom: 0.625rem;
    }
    .post-meta {
      font-size: 1.125rem;
      font-style: italic;
      margin-top: 0;
      color: #6c757d;
    }
  }
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 650px;
  }
}
</style>