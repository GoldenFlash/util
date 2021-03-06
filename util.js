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
function dateFormat(date, fmt = "yyyy-MM-dd hh:mm:ss") { //author: meizz   
  date = new Date(date)
  var o = {
    "M+": date.getMonth() + 1,                 //月份   
    "d+": date.getDate(),                    //日   
    "h+": date.getHours(),                   //小时   
    "m+": date.getMinutes(),                 //分   
    "s+": date.getSeconds(),                 //秒   
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
    "S": date.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
//在XMLHttprequest中对象转表单编码
function encodeFormData(data){
  if(!data){return ""}
  var pairs = []
  for(var name in data){
    if(!data.hasOwnProperty(name)) continue
    if(typeof data[name] === "function" ) continue
    var value = data[name].toString()
    name = encodeURIComponent(name.replace("%20","+"))
    value = encodeURIComponent(value.replace("%20","+"))
    pairs.push(name + "=" + value)
  }
  return pairs.join("&")
}

//判断两个值是否相等（对基本类型的值的准确判断）
function objectIs(x, y) {
  if (x === y) {
    //修复 -0===+0 返回true 的情况（期望值为false）
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 修复NaN===NaN 返回false 的情况（期望值为true）
    return x !== x && y !== y;
  }
}

//对象浅比较相等返回 true 不相等返回false
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;
  const hasOwn = Object.prototype.hasOwnProperty;

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}