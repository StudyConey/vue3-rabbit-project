<script setup>

import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category.js";
import {onMounted} from "vue";

//触发导航列表的action
const categoryStore = useCategoryStore();
onMounted(() => useCategoryStore().getCategory())
</script>

<template>

  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <!--  二级路由出口-->
  <RouterView/>
  <LayoutFooter/>
</template>

<style scoped>

</style>