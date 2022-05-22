type Action = {
  default: string;
  description: string;
  name: string;
};

const actions: Array<Action> = [
  {
    default: "Alt+Y",
    description: "Add activity user column",
    name: "addActivityUserColumn",
  },
  {
    default: "Alt+U",
    description: "Add author column",
    name: "addAuthorColumn",
  },
  {
    default: "Alt+T",
    description: "Browse",
    name: "browse",
  },
  {
    default: "Alt+A",
    description: "Browse author",
    name: "browseAuthor",
  },
  {
    default: "Ctrl+Alt+A",
    description: "Browse author in background",
    name: "browseAuthorInBackground",
  },
  {
    default: "Alt+L",
    description: "Browse first link",
    name: "browseFirstLink",
  },
  {
    default: "Ctrl+Alt+L",
    description: "Browse first link in background",
    name: "browseFirstLinkInBackground",
  },
  {
    default: "Alt+S",
    description: "Browse first media",
    name: "browseFirstMedia",
  },
  {
    default: "Ctrl+Alt+S",
    description: "Browse first media in background",
    name: "browseFirstMediaInBackground",
  },
  {
    default: "Ctrl+Alt+T",
    description: "Browse in background",
    name: "browseInBackground",
  },
  {
    default: "Alt+Delete",
    description: "Delete",
    name: "deleteTweet",
  },
  {
    default: "Alt+J",
    description: "Download media",
    name: "downloadMedia",
  },
  {
    default: "Alt+Q",
    description: "Quote",
    name: "quote",
  },
  {
    default: "Alt+D",
    description: "Remove column",
    name: "removeColumn",
  },
  {
    default: "Alt+I",
    description: "Select activity user",
    name: "selectActivityUser",
  },
  {
    default: "Alt+P",
    description: "Select author",
    name: "selectAuthor",
  },
  {
    default: "Alt+F",
    description: "Select likers",
    name: "selectDetailLikers",
  },
  {
    default: "Alt+R",
    description: "Select retweeters",
    name: "selectDetailRetweeters",
  },
  {
    default: "Alt+H",
    description: "Select first hash tag",
    name: "selectFirstHashTag",
  },
  {
    default: "Alt+O",
    description: "Select first image",
    name: "selectFirstImage",
  },
  {
    default: "Alt+K",
    description: "Select quoted tweet",
    name: "selectQuotedTweet",
  },
];

export { actions };
