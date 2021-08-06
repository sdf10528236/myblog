<template>
  <div>
    <footer class="border-top">
      <ul class="ullist">
        <li class="list">
          <a href="#!">
            <img src="@/assets/fb.png" />
          </a>
        </li>
        <li class="list">
          <a href="#!">
            <img style="height: 60px; width: 60px" src="@/assets/ig.png" />
          </a>
        </li>
        <li class="list">
          <a href="#!">
            <img src="@/assets/github.png" />
          </a>
        </li>
      </ul>
      <div class="small text-center text-muted fst-italic">
        Copyright &copy; by Lee 2021
      </div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped>
.border-top {
  text-align: center;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  .ullist {
    padding-left: 0;
    text-align: center;
    list-style: none;
    .list {
      display: inline-block;
      margin: 20px 20px;
      img {
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>