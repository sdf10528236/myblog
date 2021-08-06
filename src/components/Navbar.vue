<template>
  <div>
    <nav>
      <h1>Leeblog</h1>
      <label for="switch"
        ><div>
          <b-icon
            icon="list"
            style="width: 45px; height: 45px"
          ></b-icon></div></label
      ><!--漢堡按鈕圖示-->
      <input type="checkbox" id="switch" /><!--選單開關-->
      <ul class="menu">
        <!--選單內容-->
        <router-link to="/home" tag="li" active-class="myactive"
          >首頁</router-link
        >
        <router-link to="/experience" tag="li" active-class="myactive"
          >個人經歷</router-link
        >
        <router-link to="/learn" tag="li" active-class="myactive"
          >學習紀錄</router-link
        >
        <router-link to="/project" tag="li" active-class="myactive"
          >作品集</router-link
        >
        <router-link to="/contact" tag="li" active-class="myactive"
          >聯絡資訊</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */

export default {};
</script>



<style lang="scss" scoped>
/* reset */
body,
h1,
ul {
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding-left: 0;
}

/* NavBar */
nav {
  background: rgba（0，0，0，0）;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h1 {
    /* Logo */
    color: rgb(0, 0, 0);
    float: left;
    font-size: 32px;
    font-weight: bold;
    padding-top: 5px;
    padding-left: 15px;
    line-height: 60px;
  }
}
/* 隱藏 checkbox */
input {
  display: none;
}

/* 漢堡按鈕 */
label {
  float: right;
  padding-right: 20px;
  line-height: 50px;

  div {
    padding-top: 10px;
    vertical-align: middle;
  }
}

/* 選單列 */
.menu {
  clear: both;
  background: rgba（0，0，0，0）;
  li {
    text-align: center;

    display: block;
    padding: 10px 0;
    font-size: 18px;
    color: #5d5d5d;
    .myactive {
      color: orange;
    }
  }
}
.menu {
  max-height: 0;
  overflow: hidden;
  transition: 0.5s; /* 動畫秒數 */
}

input:checked ~ .menu {
  max-height: 300px;
}
/* 768px 以上的螢幕寬樣式 */
@media screen and (min-width: 768px) {
  label {
    display: none;
    background: rgba（0，0，0，0）;
  }
  .menu {
    float: right;
    clear: none;
    max-height: 50px;
    background: rgba（0，0，0，0）;
    .myactive {
      color: #f5a512;
      opacity: 0.8;
    }
    li {
      display: inline-block;
      color: rgb(0, 0, 0);
      font-family: "fantasy";
      font-weight: bold;
      font-size: 20px;
      padding: 20 5px;
      margin: 10px 35px 5px 5px;
    }
  }
}
</style>