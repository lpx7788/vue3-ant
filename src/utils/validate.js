/**
 * Created by liyouapple on 16/12/9.
 */
let Valitade = {}

Valitade.install = function (Vue, options) {
  Vue.prototype.$vd = {
    phone: (rule, value, callback) => {
      let phoneRe = /^1[3456789]\d{9}$/
      if (!phoneRe.test(value)) {
        callback(new Error('手机号码输入不合法'))
      }
      callback()
    },
    carded: (rule, value, callback) => {
      let cardedRe = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)|(^\d{6}$)/
      if (!cardedRe.test(value)) {
        callback(new Error('身份证输入不合法'))
      }
      callback()
    },
    numbere: (rule, value, callback) => {
      let cardedRe = /^-?\d+\.?\d*$/
      if (!cardedRe.test(value)) {
        callback(new Error('数字输入不合法'))
      } else if (value == 0) {
        callback(new Error('必须大于零'))
      }
      callback()
    },
    numberer: (rule, value, callback) => {
      let cardedRe = /^-?\d+\.?\d*$/
      if (!cardedRe.test(value)) {
        callback(new Error('数字输入不合法'))
      }
      callback()
    },
    numberea: (rule, value, callback) => {
      let cardedRe = /^\d+(\.\d+)?$/
      if (!cardedRe.test(value)) {
        callback(new Error('数字输入不合法'))
      }
      callback()
    },
    numberDate: (rule, value, callback) => {
      let cardedRe = /^\d+(\.\d+)?$/
      if (!cardedRe.test(value)) {
        callback(new Error('有效天数输入不合法'))
      }
      callback()
    },
    pass: (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('密码须大于八位数！'))
      }
      callback()
    },
    than: (rule, value, callback) => {
      let cardedRe = /^[+-]?\d*\.?\d{0,3}$/
      if (!cardedRe.test(value)) {
        callback(new Error('数字输入不合法'))
      }
      callback()
    },

    isTrue: (rule, value, callback) => {
      if(value !== true) {
        callback(new Error('请同意协议内容'))
      }
      callback()
    }





  }
}

export default Valitade




