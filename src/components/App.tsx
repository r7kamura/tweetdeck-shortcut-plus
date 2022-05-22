import { actions, type Action } from "../action";

const actionByName = actions.reduce((result, action) => {
  result[action.name] = action;
  return result;
}, {} as { [key: string]: Action });

export default function App() {
  return (
    <div className="text-base bg-slate-100 pb-16">
      <header className="max-w-xl mx-auto p-4 py-8 text-lg">
        <h1 className="font-bold">TweetDeck Shortcut Plus</h1>
      </header>
      <main>
        <ActionsSection
          actionNames={[
            "browse",
            "browseInBackground",
            "browseAuthor",
            "browseAuthorInBackground",
            "browseFirstLink",
            "browseFirstLinkInBackground",
            "browseFirstMedia",
            "browseFirstMediaInBackground",
          ]}
          category="Browse"
        />
        <ActionsSection
          actionNames={[
            "selectActivityUser",
            "selectAuthor",
            "selectDetailLikers",
            "selectDetailRetweeters",
            "selectFirstHashTag",
            "selectFirstImage",
            "selectQuotedTweet",
          ]}
          category="Select"
        />
        <ActionsSection
          actionNames={[
            "addActivityUserColumn",
            "addAuthorColumn",
            "removeColumn",
          ]}
          category="Column"
        />
        <ActionsSection
          actionNames={["deleteTweet", "downloadMedia", "quote"]}
          category="Others"
        />
        <section className="max-w-xl mx-auto p-4 rounded-xl shadow-lg bg-white mt-8">
          <div className="flex flex-row items-center py-2">
            <div className="basis-2/3">
              Shortcuts are automatically saved.
              <br />
              Restore all shortcuts to their defaults?
            </div>
            <div className="basis-1/3 text-center">
              <button
                type="button"
                className="rounded text-white bg-red-600 hover:bg-red-700 py-1 px-4"
              >
                Reset all
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ActionsSection({
  actionNames,
  category,
}: {
  actionNames: Array<string>;
  category: string;
}) {
  return (
    <section className="max-w-xl mx-auto p-4 rounded-xl shadow-lg bg-white mb-8">
      <div className="divide-y">
        <h2 className="font-bold pb-4">{category}</h2>
        {actionNames.map((actionName) => {
          const action = actionByName[actionName];
          return (
            <div className="flex flex-row items-center py-2">
              <div className="basis-1/2">{action.description}</div>
              <div className="basis-1/2">
                <input
                  type="text"
                  autoComplete="off"
                  readOnly
                  value={action.default}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
