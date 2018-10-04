/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits === null || digits.length === 0) {
    return digits;
  }

  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      // Input: [1,2,3]
      // Output: [1,2,4]
      return digits;
    } else {
      // must carry
      digits[i] = 0;
    }
  }

  return [1].concat(digits);
};
