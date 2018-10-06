/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const result = [0];
  // result = [0]
  // 0  000
  // 1  001 -> (000) 0 + 1 -> [0, 1]
  // 2  010 -> (001) 1 + 0 => [0, 1, 1]
  // 3  011 -> (001) 1 + 1 => [0, 1, 1, 2]
  // 4  100
  // 5  101
  for (let i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
};
