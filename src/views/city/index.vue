<template>
  <div class="search-box">
    <div class="top">
      <!-- 顶部搜索框 -->
      <van-search v-model="value"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        @cancel="onCancel" />

      <!-- tab页签 -->
      <van-tabs v-model:active="tabActive"
        color="#ff9854"
        line-height="2">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title"
            :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key"
          :group-data="value"></city-group>

      </template>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import useCity from '@/stores/modules/city'
import { useRouter } from 'vue-router';
import CityGroup from './cmps/CityGroup.vue'

const router = useRouter()

// 搜索框功能
const value = ref('')
const onCancel = () => {
  router.back()
}


// tab的切换
const tabActive = ref()


// 从store中获取数据
const cityStore = useCity()
cityStore.fetchCityAll()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang='less' scoped>
.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
