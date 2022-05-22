import { detectKeyString } from "./keyboard";
import {
  addActivityUserColumn,
  addAuthorColumn,
  browse,
  browseAuthor,
  browseAuthorInBackground,
  browseFirstLink,
  browseFirstLinkInBackground,
  browseFirstMedia,
  browseFirstMediaInBackground,
  browseInBackground,
  deleteTweet,
  downloadMedia,
  quote,
  removeColumn,
  selectActivityUser,
  selectAuthor,
  selectLikes,
  selectRetweets,
  selectFirstHashTag,
  selectFirstImage,
  selectQuotedTweet,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "Alt+l":
      browseFirstLink();
      break;
    case "Ctrl+Alt+l":
      browseFirstLinkInBackground();
      break;
    case "Alt+s":
      browseFirstMedia();
      break;
    case "Ctrl+Alt+s":
      browseFirstMediaInBackground();
      break;
    case "Alt+t":
      browse();
      break;
    case "Ctrl+Alt+t":
      browseInBackground();
      break;
    case "Alt+a":
      browseAuthor();
      break;
    case "Ctrl+Alt+a":
      browseAuthorInBackground();
      break;
    case "Alt+h":
      selectFirstHashTag();
      break;
    case "Alt+o":
      selectFirstImage();
      break;
    case "Alt+p":
      selectAuthor();
      break;
    case "Alt+i":
      selectActivityUser();
      break;
    case "Alt+f":
      selectLikes();
      break;
    case "Alt+r":
      selectRetweets();
      break;
    case "Alt+k":
      selectQuotedTweet();
      break;
    case "Alt+u":
      addAuthorColumn();
      break;
    case "Alt+y":
      addActivityUserColumn();
      break;
    case "Alt+d":
      removeColumn();
      break;
    case "Alt+q":
      quote();
      break;
    case "Alt+j":
      downloadMedia();
      break;
    case "Alt+Delete":
      deleteTweet();
      break;
    default:
      return;
  }
  event.preventDefault();
}

document.addEventListener("keydown", onKeydown);
