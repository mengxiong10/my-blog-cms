<template>
  <div>
    <v-date range v-model="value"></v-date>
    <v-d v-model="value" range></v-d>
    <ul>
      <li v-for="(i,index) in 5">{{i+ '-' + index}}</li>
    </ul>
    <button @click="test">test</button>
  <div class="block">
    <span class="demonstration">默认</span>

  </div>

  </div>
</template>

<script>
import VD from 'components/v-datepicker.vue'
import VDate from 'components/datepicker.vue'
export default {
  components:{VDate,VD},
  data () {
    return {
      time:'2016-10-09',
      value:'',
      value6:['2016-05-05','2017-06-06']
    }
  },
  methods:{
    test (){
      console.log(this.value)
    }
  }
}
</script>