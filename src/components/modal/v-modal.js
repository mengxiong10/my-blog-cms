import Vue from 'vue'

let $root = null

Vue.prototype.$modal = {
  setRoot(vm) {
    $root = vm
  },
  confirm(text){
    if (!$root) {return}
    $root.modal.show = true
    $root.modal.content = text
    return new Promise(function (resolve,reject) {
      $root.modal.confirm = function () {
         resolve('ok')
         $root.modal.show = false
      }
      $root.modal.cancel = function () {
         // reject()
         $root.modal.show = false
      }
    })
  },
  alert(text){
    if (!$root) {return}
    $root.modal.show = true
    $root.modal.content = text
    return new Promise(function (resolve,reject) {
      $root.modal.confirm = function () {
         resolve('ok')
         $root.modal.show = false
      }
      $root.modal.cancel = null
    })
  }
}

// 用法
// this.$modal.confirm('确认删除吗').then(()=>{
// }).catch(()=>{
// })

// this.$modal.alert('上传成功')