chrome.runtime.sendMessage({
  todo: "showPageAction",
});

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.todo === "changeColor") {
    const para = document.querySelector(".gap-top-300");
    para.style.color = req.colorValue;
  }
});
