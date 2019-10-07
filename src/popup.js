function clickHandler(value) {
  chrome.runtime.sendMessage({ rotine: value }, (response) => { });
}
document.addEventListener('DOMContentLoaded',  () => {
  document.getElementById("settings").addEventListener("click", () => {
    const popup_url = chrome.extension.getURL("settings.html");

    chrome.windows.getCurrent(function(win) {
      var width = 285;
      var height= 220;
      var left = ((screen.width / 2) - (width / 2)) + win.left;
      var top = ((screen.height / 2) - (height / 2)) + win.top;

      chrome.windows.create({
        "url": popup_url, focused: true, type: 'panel',
        width: width, height: height,
        top: Math.round(top),
        left: Math.round(left)
      });
    });
  });

  document.getElementById("info").addEventListener("click", () => {
    window.location.href = "info.html"
  });
});
        
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
})