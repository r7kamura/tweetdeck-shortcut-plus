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

export function copyUrlOfSelectedTweetAuthor() {
  const url = getUrlOfSelectedTweetAuthor();
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

export function openUrlOfSelectedTweetLikes() {
  const url = getUrlOfSelectedTweetLikes();
  if (url) {
    openForegroundTab(url);
  }
}

export function openUrlOfSelectedTweetLikesInBackground() {
  const url = getUrlOfSelectedTweetLikes();
  if (url) {
    openBackgroundTab(url);
  }
}

export function openUrlOfSelectedTweetAuthor() {
  const url = getUrlOfSelectedTweetAuthor();
  if (url) {
    openForegroundTab(url);
  }
}

export function openUrlOfSelectedTweetAuthorInBackground() {
  const url = getUrlOfSelectedTweetAuthor();
  if (url) {
    openBackgroundTab(url);
  }
}

export function removeSelectedColumn() {
  findSelectedColumnActionsToggleButton()?.click();
  findSelectedColumnRemoveButton()?.click();
}

export function selectAuthorOfSelectedTweet() {
  const element = document.querySelector(
    '.is-selected-tweet a[rel="user"]'
  ) as HTMLElement | null;
  element?.click();
}

export function selectHashtagInSelectedTweet() {
  const element = document.querySelector(
    '.is-selected-tweet a[rel="hashtag"]'
  ) as HTMLElement | null;
  element?.click();
}

export function selectImageInSelectedTweet() {
  const element = document.querySelector(
    ".is-selected-tweet .js-media-image-link"
  ) as HTMLElement | null;
  element?.click();
}

export function selectQuoteInSelectedTweet() {
  const element = document.querySelector(
    ".is-selected-tweet .js-quote-detail"
  ) as HTMLElement | null;
  element?.click();
}

function findSelectedColumnActionsToggleButton() {
  return document
    .querySelector(".is-selected-tweet")
    ?.closest(".js-column-holder")
    ?.querySelector(".js-action-header-button") as HTMLButtonElement | null;
}

function findSelectedColumnRemoveButton() {
  return document
    .querySelector(".is-selected-tweet")
    ?.closest(".js-column-holder")
    ?.querySelector('button[data-action="remove"]') as HTMLButtonElement | null;
}

function getUrlInSelectedTweet() {
  return document
    .querySelector(".is-selected-tweet .js-tweet-body .url-ext")
    ?.getAttribute("data-full-url");
}

function getUrlOfSelectedTweet() {
  return document
    .querySelector(".is-selected-tweet a[rel='url']")
    ?.getAttribute("href");
}

function getUrlOfSelectedTweetLikes() {
  const url = getUrlOfSelectedTweet();
  if (url) {
    return `${url}/likes`;
  } else {
    return null;
  }
}

function getUrlOfSelectedTweetAuthor() {
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
