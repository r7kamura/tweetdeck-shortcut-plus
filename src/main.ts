import { detectKeyString } from "./keyboard";
import {
  addSelectedActivityOperatorColumn,
  addSelectedTweetAuthorColumn,
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
  openUrlOfSelectedTweet,
  openUrlOfSelectedTweetAuthor,
  openUrlOfSelectedTweetAuthorInBackground,
  openUrlOfSelectedTweetInBackground,
  removeSelectedItemColumn,
  selectSelectedActivityOperator,
  selectSelectedTweetAuthor,
  selectSelectedTweetDetailLikers,
  selectSelectedTweetDetailRetweeters,
  selectSelectedTweetHashTag,
  selectSelectedTweetImage,
  selectSelectedTweetQuotedTweet,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "alt+l":
      openUrlInSelectedTweet();
      break;
    case "ctrl+alt+l":
      openUrlInSelectedTweetInBackground();
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
      selectSelectedTweetHashTag();
      break;
    case "alt+o":
      selectSelectedTweetImage();
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
