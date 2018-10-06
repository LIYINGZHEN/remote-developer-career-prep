/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const words = s + t;

  let result = 0;

  for (let i = 0; i < words.length; i++) {
    result ^= words.charCodeAt(i);
  }

  return String.fromCharCode(result);
};
