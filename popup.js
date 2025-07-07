function changeColor(color) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
      args: [color]
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("red").addEventListener("click", () => changeColor("red"));
  document.getElementById("blue").addEventListener("click", () => changeColor("blue"));
  document.getElementById("green").addEventListener("click", () => changeColor("green"));
});
