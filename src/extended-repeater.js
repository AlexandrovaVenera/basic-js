const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options
) {
  let optional = `${String(addition)}${additionSeparator}`
    .repeat(additionRepeatTimes)
    .slice(0, -additionSeparator.split('').length);

  return `${String(str)}${optional}${separator}`
    .repeat(repeatTimes)
    .slice(0, -separator.split('').length);
}

module.exports = {
  repeater,
};

// function repeater(
//   str,
//   {
//     repeatTimes,
//     separator = '+',
//     addition,
//     additionRepeatTimes,
//     additionSeparator = '|',
//   } = options
// ) {
//   function checkOption(name) {
//     return name ? name : '';
//   }
//   function checkOptionAdd(name) {
//     return name == null ? name : '';
//   }
//   console.log(checkOptionAdd(separator));
//   let opt = additionSeparator
//     ? `${checkOptionAdd(String(addition))}${additionSeparator}`
//         .repeat(additionRepeatTimes ? additionRepeatTimes : 1)
//         .slice(0, -additionSeparator.split('').length)
//     : `${checkOptionAdd(String(addition))}`.repeat(
//         additionRepeatTimes ? additionRepeatTimes : 1
//       );

//   return separator
//     ? `${String(str)}${opt}${checkOption(separator)}`
//         .repeat(repeatTimes ? repeatTimes : 1)
//         .slice(0, -separator.split('').length)
//     : `${String(str)}${opt}${checkOption(separator)}`.repeat(
//         repeatTimes ? repeatTimes : 1
//       );
// }
