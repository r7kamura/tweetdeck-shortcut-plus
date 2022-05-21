import { actions } from "../action";

export default function App() {
  return (
    <>
      <header>
        <nav>
        <h1>TweetDeck Shortcut Plus</h1>
        </nav>
      </header>
      <main>
        <section>
          <table>
            <tbody>
              {actions.map((action) => {
                return (
                  <tr>
                    <td>{action.description}</td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        readOnly
                        value={action.default}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
