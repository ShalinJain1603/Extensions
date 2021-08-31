const contextMenuItem = {
  id: "spendMoney",
  title: "spendMoney",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((e) => {
  if (e.menuItemId === "spendMoney" && e.selectionText) {
    const val = parseInt(e.selectionText);
    if (Number.isInteger(val)) {
      chrome.storage.sync.get(["total", "limit"], (budget) => {
        let newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        const newAmount = parseInt(val) || 0;
        newTotal += newAmount;
        chrome.storage.sync.set({ total: newTotal }, () => {
          if (newTotal >= budget.limit) {
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
    }
  }
});

chrome.storage.onChanged.addListener((changes, storageName) => {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString(),
  });
});
