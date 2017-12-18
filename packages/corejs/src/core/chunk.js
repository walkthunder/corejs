/**
 * Split array into smaller arrays of specified size
 *  Note that if the length of arr cannot be split evenly,
 *  the remaining contents would be contained in the final chunk
 * @param {Array} arr
 * @param {number} size
 */
export const chunk = (arr, size) => Array.from(
  { length: Math.ceil(arr.length / size)},
  (_, i) => arr.slice(i * size, (i + 1) * size)
)