<template>
  <div class="bookmark-shelf-card">
    <div class="bookmark-shelf-card-title">标题</div>
    <div class="bookmark-shelf-card-content">123123123123123</div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less">
.bookmark-shelf-card {
  display: grid;
  grid-template-rows: 32px auto;
  &-title {
    padding-bottom: 8px;
    color: @base_white;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
  &-content {
    padding: 12px;
    .blur_background();
  }
}
</style>
