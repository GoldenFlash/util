function isUndef (v) {
  return v === undefined || v === null
}
function isDef (v) {
  return v !== undefined && v !== null
}
function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}