const ignoredKeys = new Set(["Alt", "Control", "Meta", "Shift"]);

export function detectKeyString(event: KeyboardEvent): string {
  const segments = [];
  if (event.shiftKey) {
    segments.push("Shift");
  }
  if (event.ctrlKey) {
    segments.push("Ctrl");
  }
  if (event.altKey) {
    segments.push("Alt");
  }
  if (event.metaKey) {
    segments.push("Meta");
  }
  if (!ignoredKeys.has(event.key)) {
    segments.push(event.key);
  }
  return segments.join("+");
}
