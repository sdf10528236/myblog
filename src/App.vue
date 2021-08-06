<template>
  <div id="app" style="width: 100%; margin: auto">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import navbar from "./components/Navbar.vue";
import Vue from "vue";

Vue.component("navbar", navbar);

export default {};
</script>

<style >
* {
  margin: 0px;
  padding: 0px;
}
html body {
  height: 100%;
  width: 100%;
}
</style>
