import { detectKeyString } from "./keyboard";
import {
  addSelectedActivityOperatorColumn,
  addSelectedTweetAuthorColumn,
  openUrlOfSelectedTweet,
  openUrlOfSelectedTweetAuthor,
  openUrlOfSelectedTweetAuthorInBackground,
  openUrlOfSelectedTweetFirstLink,
  openUrlOfSelectedTweetFirstLinkInBackground,
  openUrlOfSelectedTweetFirstMedia,
  openUrlOfSelectedTweetFirstMediaInBackground,
  openUrlOfSelectedTweetInBackground,
  removeSelectedItemColumn,
  selectSelectedActivityOperator,
  selectSelectedTweetAuthor,
  selectSelectedTweetDetailLikers,
  selectSelectedTweetDetailRetweeters,
  selectSelectedTweetFirstHashTag,
  selectSelectedTweetFirstImage,
  selectSelectedTweetQuotedTweet,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "alt+l":
      openUrlOfSelectedTweetFirstLink();
      break;
    case "ctrl+alt+l":
      openUrlOfSelectedTweetFirstLinkInBackground();
      break;
    case "alt+s":
      openUrlOfSelectedTweetFirstMedia();
      break;
    case "ctrl+alt+s":
      openUrlOfSelectedTweetFirstMediaInBackground();
      break;
    case "alt+t":
      openUrlOfSelectedTweet();
      break;
    case "ctrl+alt+t":
      openUrlOfSelectedTweetInBackground();
      break;
    case "alt+a":
      openUrlOfSelectedTweetAuthor();
      break;
    case "ctrl+alt+a":
      openUrlOfSelectedTweetAuthorInBackground();
      break;
    case "alt+h":
      selectSelectedTweetFirstHashTag();
      break;
    case "alt+o":
      selectSelectedTweetFirstImage();
      break;
    case "alt+p":
      selectSelectedTweetAuthor();
      break;
    case "alt+i":
      selectSelectedActivityOperator();
      break;
    case "alt+f":
      selectSelectedTweetDetailLikers();
      break;
    case "alt+r":
      selectSelectedTweetDetailRetweeters();
      break;
    case "alt+q":
      selectSelectedTweetQuotedTweet();
      break;
    case "alt+u":
      addSelectedTweetAuthorColumn();
      break;
    case "alt+y":
      addSelectedActivityOperatorColumn();
      break;
    case "alt+d":
      removeSelectedItemColumn();
      break;
    default:
      return;
  }
  event.preventDefault();
}

document.addEventListener("keydown", onKeydown);
