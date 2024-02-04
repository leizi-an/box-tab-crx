<template>
  <div>
    <el-badge :value="bookmarksStore.stayBookmarks.length" :hidden="true">
      <div @click="showDrawerHandler"><icon-fold></icon-fold></div>
      <el-icon><Fold /></el-icon>
    </el-badge>
    <el-drawer
      v-model="drawerVisible"
      title="待分类书签"
      modal-class="draw-modal"
      :show-close="false"
      class="stay-draw"
      size="50%"
    >
      <el-tooltip
        effect="light"
        :content="title"
        placement="top-start"
        v-for="{ title } in bookmarksStore.stayBookmarks"
      >
        <div class="bookmarks-item">
          {{ title }}
        </div>
      </el-tooltip>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import useBookmarksStore from "@/store/bookmarks";

const drawerVisible = ref(false);
const bookmarksStore = useBookmarksStore();
onMounted(() => {
  bookmarksStore.getStayBookmarks();
  console.log("------- ", bookmarksStore.stayBookmarks);
});
const showDrawerHandler = () => {
  drawerVisible.value = true;
};
</script>
<style lang="less">
.draw-modal {
  background-color: unset;
  // 抽屉样式
  .stay-draw {
    .blur_background();

    .el-drawer__title {
      color: #fff;
      font-size: 24px;
      font-weight: 900;
    }

    .bookmarks-item {
      color: @base_white;
      font-weight: 900;
      font-size: 16px;
      padding: 8px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      .base_overflow_dotting();
    }
    .bookmarks-item:not(:last-child) {
      margin-bottom: 12px;
    }
    .bookmarks-item:hover {
      box-shadow: 0 2px 12px rgba(255, 255, 255, 1);
    }
  }
}
</style>
