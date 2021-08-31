const contextMenuItem = {
  id: "searchWiki",
  title: "Search on Wikipidea",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
chrome.contextMenus.onClicked.addListener((e) => {
  if (e.menuItemId === "searchWiki" && e.selectionText) {
    const encodedText = fixedEncodeURIComponent(e.selectionText);
    const wikiUrl = "https://en.wikipedia.org/wiki/" + encodedText;
    const createData = {
      url: wikiUrl,
      type: "popup",
      top: 5,
      left: 5,
      width: screen.availWidth / 2,
      height: (screen.availHeight + 1) / 2,
    };
    chrome.windows.create(createData);
  }
});
