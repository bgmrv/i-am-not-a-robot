function clickHandler(value) {
  chrome.runtime.sendMessage({ rotine: value }, (response) => { });
}

document.addEventListener('DOMContentLoaded',  () => {
  document.getElementById("info").addEventListener("click", () => {
    window.location.href = "info.html"
  });
  
  const url = chrome.runtime.getURL("scenarios/modelo.prefeituras.net.json");

  fetch(url)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((scenario) => {
      var option = document.createElement("option");   // Create a <button> element
      option.value = scenario.id;
      option.innerHTML = scenario.name;
      document.getElementById("scenarios").appendChild(option);  
    });

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

    document.getElementById('preload').style.display = 'none';
    document.getElementById('posload').style.display = '';

    document.getElementById('send').addEventListener('click', () => {      
      const scenarioName = document.getElementById('scenarios').value;

      // console.log
      var div = document.createElement("div");
      div.innerHTML = scenarioName;
      document.getElementById("posload").appendChild(div);  

      const [scenario] = json.filter(s => s.id == scenarioName);
      clickHandler(scenario.steps);
    });
  });

});