import { detectKeyString } from "./keyboard";
import { runCommands } from "./commander";
import { generateKeyMap } from "./keybinding";

chrome.runtime.sendMessage(
  { type: "requestKeybindings" },
  ({ keybindings }) => {
    const keyMap = generateKeyMap(keybindings);
    document.addEventListener("keydown", (event) => {
      const key = detectKeyString(event)!;
      const commandNames = keyMap[key] || [];
      runCommands(commandNames);
    });
  }
);
