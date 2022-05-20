import { detectKeyString } from "./key";
import {
  openUrlInSelectedTweet,
  openUrlInSelectedTweetInBackground,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "Alt+L":
      openUrlInSelectedTweet();
      break;
    case "Ctrl+Alt+L":
      openUrlInSelectedTweetInBackground();
      break;
  }
}

document.addEventListener("keydown", onKeydown);
