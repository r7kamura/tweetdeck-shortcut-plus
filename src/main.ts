import { detectKeyString } from "./key";
import {
  copyUrlOfSelectedTweet,
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
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
    case "ctrl+c":
      copyUrlOfSelectedTweet();
  }
}

document.addEventListener("keydown", onKeydown);
