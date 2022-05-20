const ignoredKeys = new Set(["Alt", "Control", "Meta", "Shift"]);

export function detectKeyString(event: KeyboardEvent): string {
  const segments = [];
  if (event.shiftKey) {
    segments.push("shift");
  }
  if (event.ctrlKey) {
    segments.push("ctrl");
  }
  if (event.altKey) {
    segments.push("alt");
  }
  if (event.metaKey) {
    segments.push("meta");
  }
  if (!ignoredKeys.has(event.key)) {
    segments.push(event.key);
  }
  return segments.join("+");
}
