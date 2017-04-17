<template>
  <v-date v-model="date"></v-date>
</template>

<script>
import VDate from 'components/datepicker/index.vue'

export default {
  components: { VDate },
  data() {
    return {
      date: '',
    }
  },
}

</script>
