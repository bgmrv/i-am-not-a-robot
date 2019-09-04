chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "input") {
    document.querySelector(request.selector).value = request.value;
  } else if (request.action == "click") {
    document.querySelector(request.selector).click();
  }

  sendResponse({ status: true });
});