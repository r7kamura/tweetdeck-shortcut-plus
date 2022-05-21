import { openBackgroundTab, openForegroundTab } from "./tab";

export function addSelectedActivityOperatorColumn() {
  findSelectedActivityOperatorLink()?.click();
  addDisplayedUserColumn();
}

export function addSelectedTweetAuthorColumn() {
  findSelectedTweetAuthorLink()?.click();
  addDisplayedUserColumn();
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

export function selectSelectedTweetHashTag() {
  const element = document.querySelector(
    '.is-selected-tweet a[rel="hashtag"]'
  ) as HTMLElement | null;
  element?.click();
}

export function selectSelectedTweetImage() {
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

function focusSelectedItem() {
  findSelectedItem()?.focus();
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

function getUrlOfSelectedTweetAuthor() {
  return document
    .querySelector(".is-selected-tweet a[rel='user']")
    ?.getAttribute("href");
}
