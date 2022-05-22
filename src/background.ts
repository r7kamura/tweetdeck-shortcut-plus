chrome.runtime.onMessage.addListener((request) => {
  request.urls.forEach((url: string) => {
    chrome.downloads.download({ url });
  });
});

chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage();
});
