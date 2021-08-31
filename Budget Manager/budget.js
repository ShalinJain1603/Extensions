const myForm = document.querySelector("#myform");
const total = document.querySelector("#total");
const amount = document.querySelector("#amount");
const limit = document.querySelector("#limit");

chrome.storage.sync.get(["total", "limit"], (budget) => {
  console.log(budget);
  if (budget.total) {
    total.innerText = budget.total;
  }
  if (budget.limit) {
    limit.innerText = budget.limit;
  }
  if (parseInt(total.innerText) >= parseInt(limit.innerText)) {
    total.style.color = "red";
  }
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  chrome.storage.sync.get("total", (budget) => {
    let newTotal = 0;
    if (budget.total) {
      newTotal += parseInt(budget.total);
    }
    const newAmount = parseInt(amount.value) || 0;
    newTotal += newAmount;
    chrome.storage.sync.set({ total: newTotal });
    total.innerText = newTotal;
    amount.value = "";
    if (parseInt(total.innerText) >= parseInt(limit.innerText)) {
      total.style.color = "red";
      const notifications = {
        type: "basic",
        iconUrl: "icon48.png",
        title: "Limit reached",
        message: "Looks like you have reached your limit",
      };
      chrome.notifications.create("limitnote", notifications);
    }
  });
});
