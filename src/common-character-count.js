const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);
  let length = 0;
  arr1.forEach((item) => {
    let item2 = arr2.indexOf(item);
    if (item2 != -1) {
      arr2.splice(item2, 1);
      length += 1;
    }
  });
  return length;
}

module.exports = {
  getCommonCharacterCount,
};
