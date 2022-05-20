import { detectKeyString } from "./key";
import {
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
  }
}

document.addEventListener("keydown", onKeydown);
