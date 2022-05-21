import { openUrlInBackground, openUrlInForeground } from "./tab";

export function addSelectedActivityOperatorColumn() {
  findSelectedActivityOperatorLink()?.click();
  addDisplayedUserColumn();
}

export function addSelectedTweetAuthorColumn() {
  findSelectedTweetAuthorLink()?.click();
  addDisplayedUserColumn();
}

export function openUrlOfSelectedTweetFirstMedia() {
  const url =
    findSelectedTweetFirstImageOriginalUrl() ||
    findSelectedTweetGifVideoUrl() ||
    findSelectedTweetNativeVideoUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function openUrlOfSelectedTweetFirstMediaInBackground() {
  const url =
    findSelectedTweetFirstImageOriginalUrl() ||
    findSelectedTweetGifVideoUrl() ||
    findSelectedTweetNativeVideoUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function openUrlOfSelectedTweetFirstLink() {
  const url = findSelectedTweetFirstLinkUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function openUrlOfSelectedTweetFirstLinkInBackground() {
  const url = findSelectedTweetFirstLinkUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function openUrlOfSelectedTweet() {
  const url = findSelectedTweetUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function openUrlOfSelectedTweetInBackground() {
  const url = findSelectedTweetUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function openUrlOfSelectedTweetAuthor() {
  const url = findSelectedTweetAuthorUrl();
  if (url) {
    openUrlInForeground(url);
  }
}

export function openUrlOfSelectedTweetAuthorInBackground() {
  const url = findSelectedTweetAuthorUrl();
  if (url) {
    openUrlInBackground(url);
  }
}

export function quoteSelectedTweet() {
  findSelectedTweetRetweetLink()?.click();
  findModalQuoteButton()?.click();
}

export function removeSelectedItemColumn() {
  findSelectedColumnActionsToggleButton()?.click();
  findSelectedColumnRemoveButton()?.click();
}

export function selectSelectedActivityOperator() {
  findSelectedActivityOperatorLink()?.click();
}

export function selectSelectedTweetAuthor() {
  findSelectedTweetAuthorLink()?.click();
}

export function selectSelectedTweetDetailLikers() {
  findSelectedTweetDetailLikersLabel()?.click();
}

export function selectSelectedTweetDetailRetweeters() {
  findSelectedTweetDetailRetweetersLabel()?.click();
}

export function selectSelectedTweetFirstHashTag() {
  const element = document.querySelector(
    '.is-selected-tweet a[rel="hashtag"]'
  ) as HTMLElement | null;
  element?.click();
}

export function selectSelectedTweetFirstImage() {
  const element = document.querySelector(
    ".is-selected-tweet .js-media-image-link"
  ) as HTMLElement | null;
  element?.click();
}

export function selectSelectedTweetQuotedTweet() {
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
  focusSelectedItem();
}

function convertRawImageUrlToOriginalImageUrl(url: string) {
  return `${url}?name=orig`;
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
    '.js-modal button[data-action="quote"]'
  ) as HTMLElement | null;
}

function findModalTweetsButton() {
  return document.querySelector(
    '.js-modal-content .js-item-launch[data-type="tweets"]'
  ) as HTMLElement | null;
}

function findSelectedActivityOperatorLink() {
  return document.querySelector(
    '.is-selected-tweet .activity-header a[rel="user"]'
  ) as HTMLElement | null;
}

function findSelectedColumnActionsToggleButton() {
  return findSelectedItem()
    ?.closest(".js-column-holder")
    ?.querySelector(".js-action-header-button") as HTMLElement | null;
}

function findSelectedColumnRemoveButton() {
  return findSelectedItem()
    ?.closest(".js-column-holder")
    ?.querySelector('button[data-action="remove"]') as HTMLElement | null;
}

function findSelectedItem() {
  return document.querySelector(".is-selected-tweet") as HTMLElement | null;
}

function findSelectedTweetAuthorLink() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet a[rel="user"]'
  ) as HTMLElement | null;
}

function findSelectedTweetDetailLikersLabel() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet-stat[data-type="favoriters"]'
  ) as HTMLElement | null;
}

function findSelectedTweetDetailRetweetersLabel() {
  return document.querySelector(
    '.is-selected-tweet .js-tweet-stat[data-type="retweeters"]'
  ) as HTMLElement | null;
}

function findSelectedTweetFirstImageOriginalUrl() {
  const style = document
    .querySelector(".is-selected-tweet .js-media-image-link")
    ?.getAttribute("style");
  const url = style?.match(/background-image:url\((?<url>.+)\?.*\)/)?.groups
    ?.url;
  if (url) {
    return convertRawImageUrlToOriginalImageUrl(url);
  } else {
    return null;
  }
}

function findSelectedTweetFirstLinkUrl() {
  return document
    .querySelector(".is-selected-tweet .js-tweet-body .url-ext")
    ?.getAttribute("data-full-url");
}

function findSelectedTweetUrl() {
  return document
    .querySelector(".is-selected-tweet a[rel='url']")
    ?.getAttribute("href");
}

function findSelectedTweetAuthorUrl() {
  return document
    .querySelector(".is-selected-tweet a[rel='user']")
    ?.getAttribute("href");
}

function findSelectedTweetGifVideoUrl() {
  return document
    .querySelector(".is-selected-tweet .js-media-gif")
    ?.getAttribute("src");
}

function findSelectedTweetNativeVideoUrl() {
  return document
    .querySelector(".is-selected-tweet .js-media-native-video")
    ?.getAttribute("src");
}

function findSelectedTweetRetweetLink() {
  return document.querySelector(
    '.is-selected-tweet a[rel="retweet"]'
  ) as HTMLElement | null;
}

function focusSelectedItem() {
  findSelectedItem()?.focus();
}
