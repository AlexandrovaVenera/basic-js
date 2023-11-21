const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  Array.from(String(n)).forEach((item, i) => {
    let arr1 = Array.from(String(n));
    arr1.splice(i, 1);
    arr.push(+arr1.join(""));
  });
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
