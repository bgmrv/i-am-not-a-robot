chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "input") {
    const input = document.querySelector(request.selector);
    input.value = request.value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  } else if (request.action == "click") {
    document.querySelector(request.selector).click();
  }

  sendResponse({ status: true });
});
