const myColor = document.querySelector("#fontColor");
const submitbtn = document.querySelector("#btnChange");

submitbtn.addEventListener("click", () => {
  const colorValue = myColor.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { todo: "changeColor", colorValue });
  });
});
