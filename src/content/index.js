chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse(document);
});