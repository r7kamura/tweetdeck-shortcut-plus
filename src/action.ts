export type Action = {
  default: string;
  description: string;
  name: string;
};

const actions: Array<Action> = [
  {
    default: "Alt+y",
    description: "Add activity user column",
    name: "addActivityUserColumn",
  },
  {
    default: "Alt+u",
    description: "Add author column",
    name: "addAuthorColumn",
  },
  {
    default: "Alt+t",
    description: "Browse tweet",
    name: "browse",
  },
  {
    default: "Alt+a",
    description: "Browse author",
    name: "browseAuthor",
  },
  {
    default: "Ctrl+Alt+a",
    description: "Browse author in background",
    name: "browseAuthorInBackground",
  },
  {
    default: "Alt+l",
    description: "Browse first link",
    name: "browseFirstLink",
  },
  {
    default: "Ctrl+Alt+l",
    description: "Browse first link in background",
    name: "browseFirstLinkInBackground",
  },
  {
    default: "Alt+s",
    description: "Browse first media",
    name: "browseFirstMedia",
  },
  {
    default: "Ctrl+Alt+s",
    description: "Browse first media in background",
    name: "browseFirstMediaInBackground",
  },
  {
    default: "Ctrl+Alt+t",
    description: "Browse in background",
    name: "browseInBackground",
  },
  {
    default: "Alt+Delete",
    description: "Delete tweet",
    name: "deleteTweet",
  },
  {
    default: "Alt+j",
    description: "Download media",
    name: "downloadMedia",
  },
  {
    default: "Alt+q",
    description: "Quote tweet",
    name: "quote",
  },
  {
    default: "Alt+d",
    description: "Remove column",
    name: "removeColumn",
  },
  {
    default: "Alt+i",
    description: "Select activity user",
    name: "selectActivityUser",
  },
  {
    default: "Alt+p",
    description: "Select author",
    name: "selectAuthor",
  },
  {
    default: "Alt+f",
    description: "Select likes",
    name: "selectLikes",
  },
  {
    default: "Alt+r",
    description: "Select retweets",
    name: "selectRetweets",
  },
  {
    default: "Alt+h",
    description: "Select first hash tag",
    name: "selectFirstHashTag",
  },
  {
    default: "Alt+o",
    description: "Select first image",
    name: "selectFirstImage",
  },
  {
    default: "Alt+k",
    description: "Select quoted tweet",
    name: "selectQuotedTweet",
  },
];

export { actions };
