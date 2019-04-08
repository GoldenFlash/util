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
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}
// 数组相邻项去重
function adjacent_unique (arr){
    // let Arr = arr.sort()
    let b = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        b.push(arr[i])
      }
    }
}
// hash去重 无法引用类型去重
function arrUnique () {
  var hash = {}, result = [], item;
  for (var i = 0; i < this.length; i++) {
    item = this[i];
    if (!hash[item]) {
      hash[item] = true;
      result.push(item);
    }
  }
  return result;
};
// 根据数组中对象的某个属性去重
function arrayUniqueByName(arr, name) {
  var hash = {};
  return arr.reduce(function (item, next) {
    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
    return item;
  }, []);
}


// 获取某月天数
function getDaysOfMonth (date){
  var d = new Date(date)
  var year = d.getFullYear()
  var month = d.getMonth()
  return new Date(year,month,0).getDate()
}
// 判断日期是否有效
function IsDate(sm, mystring) {
  var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
  var str = mystring;
  var arr = reg.exec(str);
  if (str == "") return true;
  if (!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
    
  }
  return true;
}