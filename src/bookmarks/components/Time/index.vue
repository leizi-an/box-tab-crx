<template>
  <div class="time-content">
    <div class="time-box">{{ hr }}</div>
    <div class="slipt-point">:</div>
    <div class="time-box">{{ min }}</div>
    <div class="slipt-point">:</div>
    <div class="time-box">{{ sec }}</div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, onBeforeMount } from "vue";
const hr = ref("");
const min = ref("");
const sec = ref("");
const timer = ref(-1);
onBeforeMount(() => {
  getCurrentTime();
  timer.value = setInterval(() => {
    getCurrentTime();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});

// 获取当前时间
const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHr = currentDate.getHours();
  const currentMin = currentDate.getMinutes();
  const currentSec = currentDate.getSeconds();
  hr.value = currentHr < 10 ? `0${currentHr}` : `${currentHr}`;
  min.value = currentMin < 10 ? `0${currentMin}` : `${currentMin}`;
  sec.value = currentSec < 10 ? `0${currentSec}` : `${currentSec}`;
};
</script>
<style lang="less">
.time-content {
  display: flex;
  color: @base_white;
  font-size: 48px;
  font-weight: 700;
  .slipt-point {
    margin: 0 8px;
  }
  .time-box {
    text-align: center;
    width: 72px;
    height: 64px;
    line-height: 64px;
    .blur_background();
  }
}
</style>
