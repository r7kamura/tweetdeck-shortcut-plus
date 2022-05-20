import { detectKeyString } from "./key";
import {
  copyUrlOfSelectedTweet,
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
    case "alt+c":
      copyUrlOfSelectedTweet();
      break;
    case "alt+t":
      openUrlOfSelectedTweet();
      break;
    case "ctrl+alt+t":
      openUrlOfSelectedTweetInBackground();
      break;
    case "alt+u":
      openUrlOfSelectedTweetUser();
      break;
    case "ctrl+alt+u":
      openUrlOfSelectedTweetUserInBackground();
      break;
  }
}

document.addEventListener("keydown", onKeydown);
