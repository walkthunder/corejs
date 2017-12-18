export const arrayMax = (arr) => {
  if (Array.isArray(arr)) {
    return Math.max(...arr)
  }
  return new Error('Invalid parameter, need an array as input.')
}