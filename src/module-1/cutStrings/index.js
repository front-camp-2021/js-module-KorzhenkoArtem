export const cutStrings = (arr = []) => {
  const minLength = Math.min(...arr.map((value) => value.length));
  return arr.map((value) => value.slice(0, minLength));
};
