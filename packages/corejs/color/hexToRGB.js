'use strict'

export default function (hex) {
  if (typeof hex === 'string') {
    if (hex.length === 4) {
      hex += hex.slice(1)
    }
    let regParse =  /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex)
    if (regParse && regParse.slice) {
      let rgb =regParse.slice(1)
      return rgb.map(color => parseInt(color, 16))
    }
  }
  return []
}