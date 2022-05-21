chrome.runtime.onMessage.addListener((request) => {
  request.urls.forEach((url: string) => {
    chrome.downloads.download({ url });
  });
});
