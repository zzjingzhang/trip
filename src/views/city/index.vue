<template>
  <div class="search-box">
    <div class="top">
      <!-- 顶部搜索框 -->
      <van-search v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel" />

      <!-- tab页签 -->
      <van-tabs v-model:active="tabActive"
        color="#ff9854"
        line-height="2"
        @click-tab="onClickTab">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title"
            :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      {{ currentGroup }}
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCity from '@/stores/modules/city'


const value = ref('')
const tabActive = ref()

const router = useRouter()

const onSearch = () => {
  console.log('search')
}
const onCancel = () => {
  router.back()
}
const onClickTab = (title) => {
}

// 从store中获取数据
const cityStore = useCity()
cityStore.fetchCityAll()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang='less' scoped>
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
