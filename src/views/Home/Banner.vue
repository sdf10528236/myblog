<template>
  <div class="all">
    <transition name="bounce">
      <div class="container" v-show="isshow">
        <h1>Lee blog</h1>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      isshow: false,
    };
  },
  mounted() {
    this.isshow = true;
  },
};
</script>

<style lang="scss" scoped>
.all {
  overflow: hidden;
  width: 100%;
  margin: 0px;
}
.container {
  text-align: center;
  width: 100%;
  padding: 10%;
  margin: 0px;

  // background-color: red;
  h1 {
    font-size: 52px;
    font-weight: bold;
  }
}

.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.8);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (min-width: 768px) {
  .all {
    overflow: hidden;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .container {
    text-align: center;
    width: 100%;
    padding: 10%;
    margin: auto;

    // background-color: red;
    h1 {
      font-size: 126px;
      font-weight: bold;
    }
  }
}
</style>