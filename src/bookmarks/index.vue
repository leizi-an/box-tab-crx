<template>
  <div class="book-marks-content">
    <Time />
  </div>
</template>
<script setup lang="ts">
import Time from "./components/Time/index.vue";
</script>
<style lang="less">
.book-marks-content {
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("@/assets/images/background.jpeg");
  background-size: 100% 100%;
}
</style>
