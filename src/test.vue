<template>
  <div>
    <v-date range v-model="value"></v-date>
  </div>
</template>

<script>
import VDate from 'components/datepicker.vue'
export default {
  components:{VDate},
  data () {
    return {
      time:'2016-10-09',
      value:'',
    }
  }
}
</script>