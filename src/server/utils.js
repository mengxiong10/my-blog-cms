/* eslint-disable*/
export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
          target[prop] = value
      }
    }
  }
  return target
}

export function formatDate (d,fmt) {
  var date = d instanceof Date ? d : new Date(d)
  var o = {
      "M+": date.getMonth() + 1, //月份
      "[Dd]+": date.getDate(), //日
      "[Hh]+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
  };
  if (/([Yy]+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export function slideToggle(el, duration = 1000) {
  var start = Date.now()
  var slideUp = el.clientHeight > 0 
  // var c = false 
  var targetHeight = 0  
  var children = Array.prototype.slice.call(el.children)
  children.forEach((el) => targetHeight += el.offsetHeight)
  animate()
  function animate() {
    var now = Date.now()
    var elapsed = now - start 
    var fraction = elapsed / duration 
    if (fraction < 1) {
      var ratio = slideUp ? (1 - fraction) : fraction 
      el.style.height = targetHeight * ratio + 'px'
      setTimeout(animate,Math.min(25, elapsed)) 
    }else {
      var endHeight = slideUp ? 0 : targetHeight
      el.style.height = endHeight + 'px'
    }
  }
}

