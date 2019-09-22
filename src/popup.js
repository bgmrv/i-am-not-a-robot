function clickHandler(value) {
  chrome.runtime.sendMessage({ rotine: value }, (response) => { });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", () => {
    const popup_url = chrome.extension.getURL("popup.html");

    chrome.windows.create({
      "url": popup_url, focused: true, type: 'panel',
      width: 600, height: 600
    });
  });

  document.getElementById("btn2").addEventListener("click", () => {
    var fileChooser = document.createElement("input");
    fileChooser.type = "file";

    fileChooser.addEventListener("change", function (evt) {
      var f = evt.target.files[0];

      if (f) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var contents = e.target.result;
          clickHandler(contents)
        }

        reader.readAsText(f);
      }
    });

    document.body.appendChild(fileChooser);
    fileChooser.click();
  });
})