export const weirdString = (str = "") =>
  str
    .toUpperCase()
    .split(" ")
    .map((item) => item.slice(0, -1) + item.slice(-1).toLowerCase())
    .join(" ");
