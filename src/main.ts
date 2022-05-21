import { detectKeyString } from "./keyboard";
import {
  addActivityOperatorColumn,
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
  selectActivityOperator,
  selectAuthor,
  selectDetailLikers,
  selectDetailRetweeters,
  selectFirstHashTag,
  selectFirstImage,
  selectQuotedTweet,
} from "./tweetdeck";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  switch (keyString) {
    case "alt+l":
      browseFirstLink();
      break;
    case "ctrl+alt+l":
      browseFirstLinkInBackground();
      break;
    case "alt+s":
      browseFirstMedia();
      break;
    case "ctrl+alt+s":
      browseFirstMediaInBackground();
      break;
    case "alt+t":
      browse();
      break;
    case "ctrl+alt+t":
      browseInBackground();
      break;
    case "alt+a":
      browseAuthor();
      break;
    case "ctrl+alt+a":
      browseAuthorInBackground();
      break;
    case "alt+h":
      selectFirstHashTag();
      break;
    case "alt+o":
      selectFirstImage();
      break;
    case "alt+p":
      selectAuthor();
      break;
    case "alt+i":
      selectActivityOperator();
      break;
    case "alt+f":
      selectDetailLikers();
      break;
    case "alt+r":
      selectDetailRetweeters();
      break;
    case "alt+k":
      selectQuotedTweet();
      break;
    case "alt+u":
      addAuthorColumn();
      break;
    case "alt+y":
      addActivityOperatorColumn();
      break;
    case "alt+d":
      removeColumn();
      break;
    case "alt+q":
      quote();
      break;
    case "alt+j":
      downloadMedia();
      break;
    case "alt+delete":
      deleteTweet();
      break;
    default:
      return;
  }
  event.preventDefault();
}

document.addEventListener("keydown", onKeydown);
