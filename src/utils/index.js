export function deepCopy(data) {
  const t = Object.prototype.toString.call(data)
  let o

  if (t === '[object Array]') {
    o = []
  } else if (t === '[object Object]') {
    o = {}
  } else {
    return data
  }

  if (t === '[object Array]') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === '[object Object]') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
