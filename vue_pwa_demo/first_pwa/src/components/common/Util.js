

const Util = {
  isPhone(str){ // 是否为手机号
    str = str || ''
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!reg.test(str)) {
      return false
    }
    return true
  },
}


export default Util;
