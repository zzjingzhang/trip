

<template>
  <router-view></router-view>
  <tab-bar v-if="!route.meta.isHideTabBar"></tab-bar>

</template>

<script setup>
import TabBar from '@/components/TabBar/index.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style scoped>
</style>
