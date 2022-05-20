import { detectKeyString } from "./key";
import { openUrlInSelectedTweet } from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "Alt+L":
      openUrlInSelectedTweet();
      break;
  }
}

document.addEventListener("keydown", onKeydown);
