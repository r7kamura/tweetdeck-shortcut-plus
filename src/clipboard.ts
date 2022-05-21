export function copy(value: string) {
  const listener = (event: any) => {
    event.clipboardData.setData("text/plain", value);
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}
