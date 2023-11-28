const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let text = [];
    arr.forEach((el, i, arr) => {
      if (el == '--double-next') {
        text.push(arr[i + 1]);
      } else if (el == '--double-prev') {
        text.push(arr[i - 1]);
      } else if (el == '--discard-prev') {
        text.slice(0, -1);
      } else if (el == '--discard-next') {
        arr[i] = '';
        arr[i + 1] = '';
      } else {
        text.push(el);
      }
    });
    return text.filter((item) => item != '');
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform,
};
