'use strict'

/**
 * Checks if value is empty
 * @param {*} value
 * @return {boolean}
 */
export default function (value) {
  if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object') {
    if (value) {
      if (isIterable(value)) {
        console.warn('isEmpty does not support iterable collections.')
      }
      for (const attr in value) {
        return false
      }
    }
    return true
  } else {
    return !value
  }
}

function isIterable (value) {
  return (typeof Symbol === 'undefined') ? false : value[Symbol.iterator]
}