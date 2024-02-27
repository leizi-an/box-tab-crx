<template>
  <div class="book-mark-shelf">
    <BookMarkCard />
    <BookMarkCard />
    <BookMarkCard />
    <BookMarkCard />
    <BookMarkCard />
  </div>
</template>
<script setup lang="ts">
import BookMarkCard from "./components/BookMarkCard.vue";
</script>
<style lang="less">
.book-mark-shelf {
  display: grid;
  height: 100%;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(3, 33%);
}
</style>
