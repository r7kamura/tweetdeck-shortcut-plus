import { detectKeyString } from "./key";
import {
  copyUrlInSelectedTweet,
  copyUrlOfSelectedTweet,
  copyUrlOfSelectedTweetUser,
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
  openUrlOfSelectedTweet,
  openUrlOfSelectedTweetInBackground,
  openUrlOfSelectedTweetLikes,
  openUrlOfSelectedTweetLikesInBackground,
  openUrlOfSelectedTweetUser,
  openUrlOfSelectedTweetUserInBackground,
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
    case "alt+u":
      openUrlOfSelectedTweetUser();
      break;
    case "ctrl+alt+u":
      openUrlOfSelectedTweetUserInBackground();
      break;
    case "shift+alt+u":
      copyUrlOfSelectedTweetUser();
      break;
    case "alt+l":
      openUrlOfSelectedTweetLikes();
      break;
    case "ctrl+alt+l":
      openUrlOfSelectedTweetLikesInBackground();
      break;
  }
}

document.addEventListener("keydown", onKeydown);
