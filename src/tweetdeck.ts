import { openUrlInBackground, openUrlInForeground } from "./tab";

export function addActivityUserColumn() {
  findActivityUserLink()?.click();
  addDisplayedUserColumn();
}

export function addAuthorColumn() {
  findAuthorLink()?.click();
  addDisplayedUserColumn();
}

export function deleteTweet() {
  findCommandsMenuLink()?.click();
  const link = findDropdownDeleteLink();
  link?.dispatchEvent(createMouseOverEvent());
  link?.click();
}

export function downloadMedia() {
  const urls = findMediaUrls();
  if (urls.length > 0) {
    download(urls);
  }
}

export function browseFirstMedia() {
  const url =
    findFirstImageOriginalUrl() || findGifVideoUrl() || findNativeVideoUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function browseFirstMediaInBackground() {
  const url =
    findFirstImageOriginalUrl() || findGifVideoUrl() || findNativeVideoUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function browseFirstLink() {
  const url = findFirstLinkUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function browseFirstLinkInBackground() {
  const url = findFirstLinkUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function browse() {
  const url = findUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function browseInBackground() {
  const url = findUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function browseAuthor() {
  const url = findAuthorUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function browseAuthorInBackground() {
  const url = findAuthorUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function quote() {
  findRetweetLink()?.click();
  findModalQuoteButton()?.click();
}

export function removeColumn() {
  findColumnCommandsToggleButton()?.click();
  findColumnRemoveButton()?.click();
}

export function selectActivityUser() {
  findActivityUserLink()?.click();
}

export function selectAuthor() {
  findAuthorLink()?.click();
}

export function selectLikes() {
  findDetailLikesLabel()?.click();
}

export function selectRetweets() {
  findDetailRetweetsLabel()?.click();
}

export function selectFirstHashTag() {
  const element = document.querySelector(
    '.is-selected-tweet a[rel="hashtag"]'
  ) as HTMLElement | null;
  element?.click();
}

export function selectFirstImage() {
  const element = document.querySelector(
    ".is-selected-tweet .js-media-image-link"
  ) as HTMLElement | null;
  element?.click();
}

export function selectQuotedTweet() {
  const element = document.querySelector(
    ".is-selected-tweet .js-quote-detail"
  ) as HTMLElement | null;
  element?.click();
}

function addDisplayedUserColumn() {
  findModalTweetsButton()?.click();
  setTimeout(() => {
    findModalAddColumnButton()?.click();
    findModalDismissButton()?.click();
  }, 0);
  focusItem();
}

function convertRawImageUrlToOriginalImageUrl(url: string) {
  return `${url}?name=orig`;
}

function createMouseOverEvent() {
  const event = document.createEvent("HTMLEvents");
  event.initEvent("mouseover", true, false);
  return event;
}

function download(urls: Array<string>) {
  chrome.runtime.sendMessage({ type: "download", payload: { urls } });
}

function findDropdownDeleteLink() {
  return document.querySelector(
    '.js-dropdown a[data-command="destroy"]'
  ) as HTMLElement | null;
}

function findModalAddColumnButton() {
  return document.querySelector(
    ".js-modal-panel .js-add-column"
  ) as HTMLElement | null;
}

function findModalDismissButton() {
  return document.querySelector(
    ".js-modal-panel .js-dismiss"
  ) as HTMLElement | null;
}

function findModalQuoteButton() {
  return document.querySelector(
    '.js-modal button[data-command="quote"]'
  ) as HTMLElement | null;
}

function findModalTweetsButton() {
  return document.querySelector(
    '.js-modal-content .js-item-launch[data-type="tweets"]'
  ) as HTMLElement | null;
}

function findActivityUserLink() {
  return document.querySelector(
    '.is-selected-tweet .activity-header a[rel="user"]'
  ) as HTMLElement | null;
}

function findColumnCommandsToggleButton() {
  return findItem()
    ?.closest(".js-column-holder")
    ?.querySelector(".js-command-header-button") as HTMLElement | null;
}

function findColumnRemoveButton() {
  return findItem()
    ?.closest(".js-column-holder")
    ?.querySelector('button[data-command="remove"]') as HTMLElement | null;
}

function findItem() {
  return document.querySelector(".is-selected-tweet") as HTMLElement | null;
}

function findAuthorLink() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet a[rel="user"]'
  ) as HTMLElement | null;
}

function findDetailLikesLabel() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet-stat[data-type="favoriters"]'
  ) as HTMLElement | null;
}

function findDetailRetweetsLabel() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet-stat[data-type="retweeters"]'
  ) as HTMLElement | null;
}

function findCommandsMenuLink() {
  return document.querySelector(
    '.is-selected-tweet a[rel="commandsMenu"]'
  ) as HTMLElement | null;
}

function findFirstImageOriginalUrl() {
  return findMediaUrls()[0];
}

function findFirstLinkUrl() {
  return document
    .querySelector(".is-selected-tweet .js-tweet .url-ext")
    ?.getAttribute("data-full-url");
}

function findUrl() {
  return document
    .querySelector(".is-selected-tweet a[rel='url']")
    ?.getAttribute("href");
}

function findAuthorUrl() {
  return document
    .querySelector(".is-selected-tweet a[rel='user']")
    ?.getAttribute("href");
}

function findGifVideoUrl() {
  return document
    .querySelector(".is-selected-tweet .js-media-gif")
    ?.getAttribute("src");
}

function findMediaUrls() {
  const videoUrl = findGifVideoUrl() || findNativeVideoUrl();
  if (videoUrl) {
    return [videoUrl];
  } else {
    return findImageUrls();
  }
}

function findImageUrls() {
  const anchors = Array.from(
    document.querySelectorAll(".is-selected-tweet .js-media-image-link")
  );
  return anchors.reduce((urls: Array<string>, anchor) => {
    const style = anchor.getAttribute("style");
    const url = style?.match(/background-image:url\((?<url>.+)\?.*\)/)?.groups
      ?.url;
    if (url) {
      urls.push(convertRawImageUrlToOriginalImageUrl(url));
    }
    return urls;
  }, []);
}

function findNativeVideoUrl() {
  return document
    .querySelector(".is-selected-tweet .js-media-native-video")
    ?.getAttribute("src");
}

function findRetweetLink() {
  return document.querySelector(
    '.is-selected-tweet a[rel="retweet"]'
  ) as HTMLElement | null;
}

function focusItem() {
  findItem()?.focus();
}
