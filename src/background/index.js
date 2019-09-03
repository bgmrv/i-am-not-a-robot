function executeRotine({ rotine, tab }) {
  rotine.forEach((command) => {
    if (command.action === 'redirect') {
      // TODO
    }
  });
}

function sendMessage({ message, callback, tab }) {
  chrome.tabs.sendMessage(tab.id, message, callback);
}

chrome.browserAction.onClicked.addListener((tab) => {
  const url = chrome.runtime.getURL("scenarios/academus/academus.json");

  fetch(url)
    .then((response) => response.json())
    .then((rotine) => executeRotine({ rotine, tab }));
});
