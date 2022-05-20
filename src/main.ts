import { detectKeyString } from "./key";
import {
  copyUrlInSelectedTweet,
  copyUrlOfSelectedTweet,
  copyUrlOfSelectedTweetUser,
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
  openUrlOfSelectedTweet,
  openUrlOfSelectedTweetInBackground,
  openUrlOfSelectedTweetUser,
  openUrlOfSelectedTweetUserInBackground,
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
    case "shift+alt+l":
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
    case "alt+u":
      openUrlOfSelectedTweetUser();
      break;
    case "ctrl+alt+u":
      openUrlOfSelectedTweetUserInBackground();
      break;
    case "shift+alt+u":
      copyUrlOfSelectedTweetUser();
      break;
    default:
      console.log(keyString);

  }
}

document.addEventListener("keydown", onKeydown);
