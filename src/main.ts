import { detectKeyString } from "./keyboard";
import {
  copyUrlInSelectedTweet,
  copyUrlOfSelectedTweet,
  copyUrlOfSelectedTweetAuthor,
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
  openUrlOfSelectedTweet,
  openUrlOfSelectedTweetInBackground,
  openUrlOfSelectedTweetLikes,
  openUrlOfSelectedTweetLikesInBackground,
  openUrlOfSelectedTweetAuthor,
  openUrlOfSelectedTweetAuthorInBackground,
  removeSelectedColumn,
  selectHashtagInSelectedTweet,
  selectImageInSelectedTweet,
  selectQuoteInSelectedTweet,
  selectSelectedTweetAuthor,
  addSelectedTweetAuthorColumn,
  addSelectedActivityOperatorColumn,
  selectSelectedActivityOperator,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "alt+r":
      openUrlInSelectedTweet();
      break;
    case "ctrl+alt+r":
      openUrlInSelectedTweetInBackground();
      break;
    case "shift+alt+r":
      copyUrlInSelectedTweet();
      break;
    case "alt+t":
      openUrlOfSelectedTweet();
      break;
    case "ctrl+alt+t":
      openUrlOfSelectedTweetInBackground();
      break;
    case "shift+alt+t":
      copyUrlOfSelectedTweet();
      break;
    case "alt+a":
      openUrlOfSelectedTweetAuthor();
      break;
    case "ctrl+alt+a":
      openUrlOfSelectedTweetAuthorInBackground();
      break;
    case "shift+alt+a":
      copyUrlOfSelectedTweetAuthor();
      break;
    case "alt+f":
      openUrlOfSelectedTweetLikes();
      break;
    case "ctrl+alt+f":
      openUrlOfSelectedTweetLikesInBackground();
      break;
    case "alt+h":
      selectHashtagInSelectedTweet();
      break;
    case "alt+o":
      selectImageInSelectedTweet();
      break;
    case "alt+p":
      selectSelectedTweetAuthor();
      break;
    case "alt+i":
      selectSelectedActivityOperator();
      break;
    case "alt+q":
      selectQuoteInSelectedTweet();
      break;
    case "alt+u":
      addSelectedTweetAuthorColumn();
      break;
    case "alt+y":
      addSelectedActivityOperatorColumn();
      break;
    case "alt+d":
      removeSelectedColumn();
      break;
    default:
      return;
  }
  event.preventDefault();
}

document.addEventListener("keydown", onKeydown);
