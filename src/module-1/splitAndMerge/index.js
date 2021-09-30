export const splitAndMerge = (str = "", separator = "") =>
  str
    .split(" ")
    .map((el) => el.split("").join(separator))
    .join(" ");
