import Vue from 'vue'
import { formatDate } from './utils.js'

Vue.filter('date', (value, fmt = 'YYYY-MM-DD hh:mm:ss') => formatDate(value, fmt))
