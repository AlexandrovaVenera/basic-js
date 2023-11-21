const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = "";
  let count = 1;
  Array.from(str).forEach((item, i, arr) => {
    if (item == arr[i + 1]) {
      count++;
    } else {
      str1 += `${count != 1 ? count : ""}${item}`;
      count = 1;
    }
  });
  return str1;
}

module.exports = {
  encodeLine,
};
