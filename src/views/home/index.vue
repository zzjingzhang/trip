<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp"
           alt="">
    </div>
    <home-search-box>
    </home-search-box>


  </div>
</template>

<script setup>
import HomeNavBar from './cmps/HomeNavBar.vue'
import HomeSearchBox from './cmps/HomeSearchBox.vue'

</script>

<style lang='less' scoped>
.home {
  img {
    width: 100%;
  }
}
</style>
