import "./bookmarks";

// async function sendMessageToActiveTab(message: { greeting: string }) {
//   const [tab] = await chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true,
//   });
//   const response = chrome.tabs.sendMessage(tab.id || 0, message);
//   console.log(response);
// }

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message === "get-user-data") {
//     sendResponse({
//       username: "demo-user",
//     });
//   }
// });
