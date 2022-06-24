<template>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Economica:700" />
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Alegreya+Sans+SC:300" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <div>
    <header>
      <h1 class="Htitle">Vita Shredded</h1>
      <p class="Cliche"></p>
    </header>
    <main>
      <div class="pickwrapper" v-if="!maleFlg && !femaleFlg">
        <h1 class="Mtitle">Please Select Your Gender</h1>
        </div>
        <div class="SelectInfo">
          <router-link to="/male" class="pickgenderM">male</router-link>
          <router-link to="/female" class="pickgenderFM">female</router-link>
          <router-link to="/" class="toppage">top</router-link>
          <router-view></router-view>
        </div>
    </main>
    <footer>
      <h1 class="Ftitle">about me</h1>
      <ul class="Sinfo">
        <div class="Twitter">
          <span class="fa fa-twitter fa-2x"></span>
          <li><a href="https://twitter.com/aiukkksss1" class="Tcolor">twitter</a></li>
        </div>
        <div class="Git">
          <span class="fa fa-github fa-2x"></span>
          <li><a href="https://github.com/Andyyyy64" class="Gcolor">GitHub</a></li>
        </div>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import router from "./router";

export default defineComponent({
  setup() {
    const router = useRouter()
  },
  data(): { maleFlg: boolean; femaleFlg: boolean; } {
    return {
      maleFlg: false,
      femaleFlg: false,
    }
  },



})
</script>

<style>
@import "./css/mainstyle.css"
</style>
