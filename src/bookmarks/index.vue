<template>
  <div class="book-marks-content">
    <el-container>
      <el-header class="header-content"> <Time /> <SideBookMark /></el-header>
      <el-main class="main-content"><BookMarkShelf /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Time from "./components/Time/index.vue";
import SideBookMark from "./components/SideBookMark/index.vue";
import BookMarkShelf from "./components/BookMarkShelf/index.vue";
</script>
<style lang="less">
.book-marks-content {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("@/assets/images/background.jpeg");
  background-size: 100% 100%;

  .header-content {
    display: flex;
  }
  .main-content {
    height: 100vh;
    padding-left: 60px;
    padding-right: 60px;
  }
}
</style>
