<template>
  <div class="city-group">
    <van-index-bar :sticky="false"
      :highlight-color="commonStore.primaryColor"
      :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot-cities">
        <template v-for="(city, cindex) in groupData.hotCities">
          <span>{{ city.cityName }}</span>
        </template>
      </div>

      <template v-for="(item, index) in groupData.cities">
        <van-index-anchor :index="item.group" />
        <template v-for="(subItem, subIndex) in item.cities">
          <van-cell :title="subItem.cityName" />
        </template>
      </template>

    </van-index-bar>

  </div>
</template>

<script setup>
import useCommon from '@/stores/common'
import { computed } from 'vue'
// 定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }

})

// 动态索引
const indexList = computed(() => {
  const list = props.groupData.cities.map(item =>
    item.group
  )
  list.unshift('#')
  return list
})


const commonStore = useCommon()

</script>

<style lang='less' scoped>
.hot-cities {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  span {
    width: 70px;
    height: 28px;
    border-radius: 14px;

  }
}
</style>
