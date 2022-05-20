import { detectKeyString } from "./key";

function onKeydown(event: KeyboardEvent) {
  const keyString = detectKeyString(event);
  console.log(keyString);
}

document.addEventListener("keydown", onKeydown);
