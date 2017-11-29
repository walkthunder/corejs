'use strict'

export default function urlParser (url) {
  if (typeof url === 'string') {
    let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
    let [, protocol, host, path] = parsedURL
    return {
      protocol,
      host,
      path
    }
  }
  return null
}
