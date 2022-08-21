<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp"
           alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png"
             alt="">
      </div>
    </div>

  </div>
</template>

<script setup>
import HomeNavBar from './cmps/HomeNavBar.vue'

</script>

<style lang='less' scoped>
.home {
  img {
    width: 100%;
  }

  .location {
    display: flex;
    margin-top: 8px;
    padding: 0 12px;
    font-size: 12px;

    .city {
      flex: 1;
    }

    .position {
      display: flex;
      width: 70px;

      img {
        width: 16px;
        margin-left: 5px;
      }
    }
  }
}
</style>
