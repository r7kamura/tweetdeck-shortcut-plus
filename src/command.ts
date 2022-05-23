export type Command = {
  default: string;
  description: string;
  name: string;
};

const commands: Array<Command> = [
  {
    default: "alt+y",
    description: "Add activity user column",
    name: "addActivityUserColumn",
  },
  {
    default: "alt+u",
    description: "Add author column",
    name: "addAuthorColumn",
  },
  {
    default: "alt+a",
    description: "Browse author",
    name: "browseAuthor",
  },
  {
    default: "ctrl+alt+a",
    description: "Browse author in background",
    name: "browseAuthorInBackground",
  },
  {
    default: "alt+l",
    description: "Browse links",
    name: "browseLinks",
  },
  {
    default: "ctrl+alt+l",
    description: "Browse links in background",
    name: "browseLinksInBackground",
  },
  {
    default: "alt+s",
    description: "Browse media",
    name: "browseMedia",
  },
  {
    default: "ctrl+alt+s",
    description: "Browse media in background",
    name: "browseMediaInBackground",
  },
  {
    default: "alt+t",
    description: "Browse tweet",
    name: "browse",
  },
  {
    default: "ctrl+alt+t",
    description: "Browse tweet in background",
    name: "browseInBackground",
  },
  {
    default: "alt+delete",
    description: "Delete tweet",
    name: "deleteTweet",
  },
  {
    default: "alt+j",
    description: "Download media",
    name: "downloadMedia",
  },
  {
    default: "alt+q",
    description: "Quote tweet",
    name: "quote",
  },
  {
    default: "alt+d",
    description: "Remove column",
    name: "removeColumn",
  },
  {
    default: "alt+i",
    description: "Select activity user",
    name: "selectActivityUser",
  },
  {
    default: "alt+p",
    description: "Select author",
    name: "selectAuthor",
  },
  {
    default: "alt+f",
    description: "Select likes",
    name: "selectLikes",
  },
  {
    default: "alt+r",
    description: "Select retweets",
    name: "selectRetweets",
  },
  {
    default: "alt+h",
    description: "Select first hash tag",
    name: "selectFirstHashTag",
  },
  {
    default: "alt+o",
    description: "Select first image",
    name: "selectFirstImage",
  },
  {
    default: "alt+k",
    description: "Select quoted tweet",
    name: "selectQuotedTweet",
  },
];

export { commands };
