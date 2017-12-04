'use strict'

export function bind (func, thisVal) {
  return function () {
    return func.apply(thisVal, arguments)
  }
}