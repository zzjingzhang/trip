<template>
  <div class="location">
    <div class="city"
         @click="cityClick">广州</div>
    <div class="position"
         @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png"
           alt="">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const cityClick = () => {
  router.push('/city')

}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('成功', res)

  }, err => {
    console.log('失败', err)
  },
    {
      enableHighAccuracy: true,
      timeout: 50,
      maximumAge: 0
    }
  )
}

</script>

<style lang='less' scoped>
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
</style>
