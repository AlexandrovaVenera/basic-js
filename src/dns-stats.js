const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((domain) => {
    const arr = domain.split('.');
    for (let i = 0; i < arr.length; i++) {
      if (obj[`.${arr.slice(i).reverse().join('.')}`]) {
        obj[`.${arr.slice(i).reverse().join('.')}`] += 1;
      } else {
        obj[`.${arr.slice(i).reverse().join('.')}`] = 1;
      }
    }
  });
  return Object.fromEntries(
    Object.entries(obj).sort(
      ([a], [b]) => a.split('.').length - b.split('.').length
    )
  );
}
module.exports = {
  getDNSStats,
};
