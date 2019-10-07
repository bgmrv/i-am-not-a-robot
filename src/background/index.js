chrome.runtime.onMessage.addListener((request) => {
  chrome.tabs.getAllInWindow(null, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.active) {
        const { rotine } = request;
        executeRotine({ rotine, tab });
      }
    })
  });
});

function executeRotine({ rotine, tab }) {
  let resumeExecution = false;

  rotine.forEach((command, index) => {
    if (resumeExecution) {
      return;
    }

    if (command.action === "redirect") {
      chrome.tabs.update({ url: command.value });
    } else if (command.action == "sleep") {
      setTimeout(
        () => executeRotine({ rotine: rotine.slice(index + 1), tab }), 
        command.value * 1000
      );
      resumeExecution = true;
    } else {
      sendMessage({
        message: { ...command },
        callback: (response) => console.log(response),
        tab
      });
    }
  });
}

function sendMessage({ message, callback, tab }) {
  chrome.tabs.sendMessage(tab.id, message, callback);
}
