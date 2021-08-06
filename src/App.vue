<template>
  <div id="app" style="width: 100%; margin: auto">
    <navbar></navbar>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
/* eslint-disable */
import navbar from "./components/Navbar.vue";
import appfooter from "./components/Footer.vue";
import Vue from "vue";

Vue.component("navbar", navbar);
Vue.component("appfooter", appfooter);

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
