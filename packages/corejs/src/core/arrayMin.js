export const arrayMin = (arr) => {
  if (Array.isArray(arr)) {
    return Math.min(...arr)
  }
  return new Error('Invalid parameter, need an array as input.')
}