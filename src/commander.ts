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

const commandFunctionByName = {
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
} as { [key: string]: Function };

export function runCommands(commandNames: string[]) {
  commandNames.forEach((commandName) => {
    const commandFunction = commandFunctionByName[commandName];
    if (commandFunction) {
      commandFunction();
    }
  });
}
