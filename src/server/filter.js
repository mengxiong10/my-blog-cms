import Vue from 'vue'
import {formatDate} from './utils.js'

Vue.filter('date',function (value,fmt='YYYY-MM-DD hh:mm:ss') {
    return formatDate(value,fmt)
})
