function clickHandler(value) {
    chrome.runtime.sendMessage({ rotine: value }, (response) => { });
  }
  document.addEventListener('DOMContentLoaded',  () => {
    document.getElementById("return").onclick = () =>{
      window.location.href = "popup.html"
    }
  });