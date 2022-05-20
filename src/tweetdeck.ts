export function openUrlInSelectedTweet() {
  const url = document
    .querySelector(".is-selected-tweet .js-tweet-body .url-ext")
    ?.getAttribute("href");
  if (!url) {
    return;
  }
  openUrlInBackgroundTab(url);
}

function openUrlInBackgroundTab(url: string) {
  var a = document.createElement("a");
  a.href = url;
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    true,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(evt);
}
