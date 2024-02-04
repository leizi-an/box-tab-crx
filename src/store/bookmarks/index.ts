import { defineStore } from "pinia";
import { GET_BOOK_MARKS } from "@/constants/index";
import { type BookmarkTreeNode } from "./interface.d";

/**
 * @description 将用户的所有的书签拍平返回
 * @param bookmarks
 * @returns
 */
function traverseBookmarksTree(bookmarks: BookmarkTreeNode[]) {
  let node: BookmarkTreeNode = null;
  const allBookMarks: BookmarkTreeNode[] = [];
  const list = [...bookmarks];
  while ((node = list.shift())) {
    if (node.url) {
      allBookMarks.push(node);
    }
    node.children && list.push(...node.children);
  }

  return allBookMarks;
}
const useBookmarkStore = defineStore("bookmark", {
  state: () => ({ stayBookmarks: [] }),
  getters: {},
  actions: {
    getStayBookmarks() {
      chrome.runtime.sendMessage(GET_BOOK_MARKS, (response) => {
        console.log(this, this.stayBookmarks);
        this.stayBookmarks = traverseBookmarksTree(response);
        console.log(this, this.stayBookmarks);
      });
    },
  },
});

export default useBookmarkStore;
