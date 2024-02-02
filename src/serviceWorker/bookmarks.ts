import { GET_BOOK_MARKS } from "@/constants/index";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === GET_BOOK_MARKS) {
    chrome.bookmarks.getTree().then((res) => {
      sendResponse(res);
    });
  }
  // return true;
});
