export function copyUrlInSelectedTweet() {
  const url = getUrlInSelectedTweet();
  if (url) {
    copy(url);
  }
}

export function copyUrlOfSelectedTweet() {
  const url = getUrlOfSelectedTweet();
  if (url) {
    copy(url);
  }
}

export function copyUrlOfSelectedTweetUser() {
  const url = getUrlOfSelectedTweetUser();
  if (url) {
    copy(url);
  }
}

export function openUrlInSelectedTweet() {
  const url = getUrlInSelectedTweet();
  if (url) {
    openForegroundTab(url);
  }
}

export function openUrlInSelectedTweetInBackground() {
  const url = getUrlInSelectedTweet();
  if (url) {
    openBackgroundTab(url);
  }
}

export function openUrlOfSelectedTweet() {
  const url = getUrlOfSelectedTweet();
  if (url) {
    openForegroundTab(url);
  }
}

export function openUrlOfSelectedTweetInBackground() {
  const url = getUrlOfSelectedTweet();
  if (url) {
    openBackgroundTab(url);
  }
}

export function openUrlOfSelectedTweetUser() {
  const url = getUrlOfSelectedTweetUser();
  if (url) {
    openForegroundTab(url);
  }
}

export function openUrlOfSelectedTweetUserInBackground() {
  const url = getUrlOfSelectedTweetUser();
  if (url) {
    openBackgroundTab(url);
  }
}

function getUrlInSelectedTweet() {
  return document
    .querySelector(".is-selected-tweet .js-tweet-body .url-ext")
    ?.getAttribute("href");
}

function getUrlOfSelectedTweet() {
  return document
    .querySelector(".is-selected-tweet a[rel='url']")
    ?.getAttribute("href");
}

function getUrlOfSelectedTweetUser() {
  return document
    .querySelector(".is-selected-tweet a[rel='user']")
    ?.getAttribute("href");
}

function openForegroundTab(url: string) {
  window?.open(url, "_blank")?.focus();
}

function openBackgroundTab(url: string) {
  var a = document.createElement("a");
  a.href = url;
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent(
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
  a.dispatchEvent(event);
}

function copy(value: string) {
  const listener = (event: any) => {
    event.clipboardData.setData("text/plain", value);
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}
