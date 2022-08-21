<template>
  <div class="tab-bar">
    <van-tabbar v-model="curIndex"
      active-color="#ff9854">
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span class="text">{{ item.text }}</span>
          </template>
          <template #icon>
            <img :src="getAssetURL(curIndex !== index ? item.imgUrl : item.imgActiveUrl)"
              :alt="item.text">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>


  </div>
</template>

<script setup>
import tabBarData from '@/assets/localData/tabBarData'
import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'

const curIndex = ref(0)

</script>

<style lang='less' scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
