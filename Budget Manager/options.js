const reset = document.querySelector("#reset");
const myForm = document.querySelector("#setter");
const setLimit = document.querySelector("#limit");

chrome.storage.sync.get("limit", (budget) => {
  if (budget.limit) {
    setLimit.value = budget.limit;
  }
});

reset.addEventListener("click", () => {
  chrome.storage.sync.set({ total: 0 });
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = setLimit.value;
  if (val) {
    chrome.storage.sync.set({ limit: val });
  }
  setLimit.value = "";
});
