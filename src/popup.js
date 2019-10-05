function clickHandler(value) {
  chrome.runtime.sendMessage({ rotine: value }, (response) => { });
}
document.addEventListener('DOMContentLoaded',  () => {
  document.getElementById("settings").addEventListener("click", () => {
    chrome.windows.getCurrent(function(win) {
      const popup_url = chrome.extension.getURL("settings.html");
      var width = 285;
      var height= 220;
      var left = ((screen.width / 2) - (width / 2)) + win.left;
      var top = ((screen.height / 2) - (height / 2)) + win.top;

      chrome.windows.create({
        "url": popup_url, focused: true, type: 'panel',
        width: width, height: height,
        top: Math.round(top),
        left: Math.round(left),
        
      });
    });
  });
});
        
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
})