export default function curry () {
  let fn = this
  let args = [].slice.call(arguments, 0)
  return function () {
    return fn.apply(this, [ ...args, ...Array.prototype.slice.call(arguments)])
  }
}