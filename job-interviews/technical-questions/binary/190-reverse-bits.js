/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// n & 1 => last digit 0 or 1
// n >> 1 => remove last digit
// n << 1 => add 0 to the last digit
const reverseBits = n => {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1);
    n = n >> 1;
  }

  return result >>> 0; // 有符号变无符号
};
