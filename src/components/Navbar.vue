<template>
  <div>
    <nav>
      <h1>Navbar</h1>
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
        <li><a href="##">Home</a></li>
        <li><a href="##">About</a></li>
        <li><a href="##">Graphy</a></li>
        <li><a href="##">Intro</a></li>
        <li><a href="##">Contact</a></li>
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

a {
  text-decoration: none;
}

/* NavBar */
nav {
  background: rgb(194, 190, 190);
  box-shadow: 0px 1px 3px #00000088;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h1 {
    /* Logo */
    float: left;
    padding-top: 5px;
    padding-left: 10px;
    line-height: 70px;
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
  background: #fff;
  li {
    text-align: center;
    border-bottom: 1px solid #efefef;
    a {
      display: block;
      padding: 10px 0;
      font-size: 18px;
      color: #5d5d5d;
      &:hover {
        background: #5d5d5d;
        color: #fff;
      }
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
  }
  .menu {
    float: right;
    clear: none;
    max-height: 50px;
    background: rgb(194, 190, 190);
    li {
      display: inline-block;
      a {
        font-size: 22px;
        padding: 20 5px;
        margin: 10px 25px 5px 5px;
      }
    }
  }
}
</style>