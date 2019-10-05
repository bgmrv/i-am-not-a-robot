function clickHandler(value) {
  chrome.runtime.sendMessage({ rotine: value }, (response) => { });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("select-scenario").addEventListener("click", () => {
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
